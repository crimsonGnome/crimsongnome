const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const { transport, makeANiceEmail } = require('../mail');

const mutations = {
  async createProject(parent, args, ctx, info) {
    const project = await ctx.db.mutation.createProject(
      {
        data: {
          //Making a relatiponship between data and user (propigate MONGODB)
          ...args,
          pictures: {
            set: args.pictures
          },
          largePictures: {
            set: args.largePictures
          },
          phonePictures: {
            set: args.phonePictures
          },
          phonePicturesLarge: {
            set: args.phonePicturesLarge
          },

          techStack: {
            set: args.techStack
          },
          paragraphs: {
            set: args.paragraphs
          }
        }
      },
      info
    );
    return project;
  },
  async updateProject(parent, args, ctx, info) {
    //Amdin Authentication
    //Check to see if user is logged in
    // loggedIn(ctx.request.userId);
    //query the current user

    //Check if the user has permission to create search Filter
    // hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);

    //Get updates
    const updates = { ...args };
    //remove the ID
    delete updates.id;
    //run the update method
    return ctx.db.mutation.updateProject(
      {
        data: {
          ...updates,
          techStack: {
            set: args.techStack
          },
          paragraphs: {
            set: args.paragraphs
          }
        },
        where: {
          id: args.id
        }
      },
      info
    );
  },
  async signup(parent, args, ctx, info) {
    //Lowercase their email
    args.email = args.email.toLowerCase();
    //Hash password
    const password = await bcrypt.hash(args.password, 10);
    //create User
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions: { set: ['USER'] }
        }
      },
      info
    );
    //create the JWT token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    //We set a JWT as a cookie or response
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 //1 year cookie
    });
    //Finally return the user to the browser
    return user;
  },
  async signin(parent, { email, password }, ctx, info) {
    //check if there is a user
    const user = await ctx.db.query.user({ where: { email } });

    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }

    //Check password if correct
    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      throw new Error(`Invalid Password`);
    }
    //generate JWT
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    //Set the cookie wiht athe token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 //1 year cookie
    });
    //Return the user
    return user;
  },
  async resetPassword(parent, args, ctx, info) {
    //Check if passwords match
    if (args.password !== args.confirm) {
      throw new Error('Your passwords do not match');
    }
    //Check if its a legit reset token and Check if its expired
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000
      }
    });
    if (!user) {
      throw new Error('this token is either invalid or expired');
    }

    //Hash new password
    const password = await bcrypt.hash(args.password, 10);
    //Save new Password and remove old reset fields
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null
      }
    });
    //Generate JWT
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
    //Set the JWT
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    //rerurn new user
    return updatedUser;
  },
  async requestReset(parent, args, ctx, info) {
    //check if this is a real user
    const user = await ctx.db.query.user({ where: { email: args.email } });

    if (!user) {
      throw new Error(`No such user found for email ${args.email}`);
    }
    //set reset token
    const randomBytesPromisfied = promisify(randomBytes);
    const resetToken = (await randomBytesPromisfied(20)).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000;
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry }
    });
    //email them reset token
    const mailRes = await transport.sendMail({
      from: 'joseph.eggers.dev@gmail.com',
      to: user.email,
      subject: 'Your Password Reset Link',
      html: makeANiceEmail(
        `Your Password Reset Token is here! \n\n <a href="${
          process.env.FRONTEND_URL
        }/reset?resetToken=${resetToken}">Click here to Reset</a>`
      )
    });

    //Return the message
    return { message: 'Thanks!' };
  },
  async contactForm(parent, args, ctx, info) {
    //automated message to contact person
    const mailRes = await transport.sendMail({
      from: 'crimsongnome.dev@gmail.com',
      to: args.email,
      subject: 'Automated Resopnse Email',
      html: makeANiceEmail(
        `Thanks for the email, I'll try to get back within a few days. `
      )
    });
    //send email to my email
    const mailRes2 = await transport.sendMail({
      from: 'crimsongnome.dev@gmail.com',
      to: 'crimsongnome.dev@gmail.com',
      subject: `CrimsonGnome Site - ${args.subject}`,
      html: makeANiceEmail(
        `<h3>Subject - ${args.subject}</h3> \n\n
        <h4>Email - ${args.email}</h4> \n\n
        <h4>Name - ${args.name}</h4>\n\n
        <h5> Contact Form </h5>- \n\n
        <p>${args.body}</p>
        `
      )
    });
    return { message: 'Thanks!' };
  }
};

module.exports = mutations;

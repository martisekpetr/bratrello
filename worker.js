const pug = require('pug');
const models  = require('./models');
const mailer = require('./mailer');
const moment = require('moment');


exports.sendAllTasks = function(fireDate){
  models.User.findAll({
    include: [ {
      model: models.Reminder,
      where: {
          next: {
            lte: moment(fireDate).toDate().toISOString()
          }
        },
      include: [ models.Task ],
    }],
  })
  .then(function(users) {
    users.forEach((user) => {
      console.log(user.username);
      
      if(user.Reminders.length === 0) {
        return;
      }

      const html = pug.compileFile('./views/allTasks.pug')({ 
        title: user.username,
        reminders: user.Reminders 
      });
      
      const status = mailer.sendMail({ 
        to: user.email,
        subject: `BraTrello reminder for ${user.username}`,
        html: html,
      });

      user.Reminders.forEach((reminder) => {
        reminder.updateAttributes({
          next: moment(reminder.next).add(reminder.repeat, 'minutes')
        })
        console.log(reminder.Task.title);
        console.log(reminder.Task.details);        
      })
    })
  });
}

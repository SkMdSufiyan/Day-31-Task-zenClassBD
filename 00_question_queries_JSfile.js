//  The MongoDB queries to sove the questions of Day-31 task (mongodb day-2 task)


// -------------------------------------------Question-1---------------------------------------------------
//  Question-1:----------- Find all the topics and tasks which are thought in the month of October

// Query: for "topics"
db.topics.find({
        topic_date:{$gte:"2020-10-01",$lte:"2020-10-31"}
    })


// Query: for "tasks"
db.tasks.find({
    task_date:{$gte:"2020-10-01",$lte:"2020-10-31"}
})
 
// --------------------------------------------------------------------------------------------------------




// -------------------------------------------Question-2---------------------------------------------------
//  Question-2:----------- Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

// Query: 
db.company_drives.find({
    company_drive_date:{$gte:"2020-10-15", $lte:"2020-10-31"}
})
  
// --------------------------------------------------------------------------------------------------------




// -------------------------------------------Question-3---------------------------------------------------
//  Question-3:----------- Find all the company drives and students who are appeared for the placement.

// Query: 
db.company_drives.aggregate([
    {$lookup:{
        from:"users",
        localField:"users_appeared",
        foreignField:"user_id",
        as:"appeared_userDetails"
    }},
    {$project:{
        company_name:1,
        _id:0,
        appeared_userDetails:1
    }}
])
  
// --------------------------------------------------------------------------------------------------------




// -------------------------------------------Question-4---------------------------------------------------
//  Question-4:----------- Find the number of problems solved by the user in codekata

// Query: 
db.users.find().map(
    function(userdoc){
        var countValue=db.codekata.find({solved_By:{$in:[userdoc.user_id]}}).count();
        return [userdoc.user_name,"problems_solved: "+countValue]
    }
    )
  
// --------------------------------------------------------------------------------------------------------




// -------------------------------------------Question-5---------------------------------------------------
//  Question-5:----------- Find all the mentors with who has the mentee's count more than 15

// Query: 
db.mentors.find(
    {$where:function(){
        if(this.mentees.length>15){
            return this
        }}},
    {mentor_name:1,mentees:1,_id:0}
    )
  
// --------------------------------------------------------------------------------------------------------




// -------------------------------------------Question-6---------------------------------------------------
//  Question-6:----------- Find the number of users who are absent and task is not submitted between 15 oct-2020 and 31-oct-2020

// Query: 
db.users.find().map(
    function (userdoc) {
        if (
            (db.tasks.find({ $and: [{ task_date: { $gte: "2020-10-15", $lte: "2020-10-31"} }, { submitted_by: { $nin: [userdoc.user_id] } }] }).count() > 0)
             && 
             (db.attendance.find({ $and: [{ attendance_date: { $gte: "2020-10-15", $lte: "2020-10-31" } }, { attended_users: { $nin: [userdoc.user_id] } }] }).count() > 0)
             ) {
                return "user_name: " + userdoc.user_name;
            }else{
                return ""
            }
    }
    )


// --------------------------------------------------------------------------------------------------------

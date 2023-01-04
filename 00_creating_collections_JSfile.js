//  The MongoDB collection creation queries used for Day-31 task (MongoDB day-2 task creating zen class database) are given below
//  These queries are just for creating collections only.


//  Creating database with name "zenClassDatabase"
use zenClassDatabase;


// Creating collection "users" and inserting documents
db.users.insertMany(
    [
        {user_name:"user_name_1",
            user_id:"user_id_1"  },
        {user_name:"user_name_2",
            user_id:"user_id_2"  },
        {user_name:"user_name_3",
            user_id:"user_id_3"  },
        {user_name:"user_name_4",
            user_id:"user_id_4"  },
        {user_name:"user_name_5",
            user_id:"user_id_5"  },
        {user_name:"user_name_6",
            user_id:"user_id_6"  },
        {user_name:"user_name_7",
            user_id:"user_id_7"  },
        {user_name:"user_name_8",
            user_id:"user_id_8"  },
        {user_name:"user_name_9",
            user_id:"user_id_9"  },
        {user_name:"user_name_10",
            user_id:"user_id_10" },
        {user_name:"user_name_11",
            user_id:"user_id_11" },
        {user_name:"user_name_12",
            user_id:"user_id_12" },
        {user_name:"user_name_13",
            user_id:"user_id_13" },
        {user_name:"user_name_14",
            user_id:"user_id_14" },
        {user_name:"user_name_15",
            user_id:"user_id_15" },
        {user_name:"user_name_16",
            user_id:"user_id_16" },
        {user_name:"user_name_17",
            user_id:"user_id_17" },
        {user_name:"user_name_18",
            user_id:"user_id_18" }
    ]
)




// Creating collection "codekata" and inserting documents
db.codekata.insertMany(
    [
        {
            problem_name:"problem_name_1",
            problem_id:"problem_id_1",
            solved_By:["user_id_1","user_id_2","user_id_3","user_id_4","user_id_8","user_id_9"]
        },
        {
            problem_name:"problem_name_2",
            problem_id:"problem_id_2",
            solved_By:["user_id_1","user_id_2","user_id_5","user_id_8"]
        },
        {
            problem_name:"problem_name_3",
            problem_id:"problem_id_3",
            solved_By:["user_id_2","user_id_4","user_id_8","user_id_9"]
        },
        {
            problem_name:"problem_name_4",
            problem_id:"problem_id_4",
            solved_By:["user_id_1","user_id_8","user_id_9"]
        }
    ]
)



// Creating collection "attendance" and inserting documents
db.attendance.insertMany(
    [
        {
            attendance_date:"2020-10-01",
            attended_users:["user_id_1","user_id_2","user_id_3","user_id_4","user_id_8","user_id_9"]
        },
        {
            attendance_date:"2020-10-15",
            attended_users:["user_id_1","user_id_2","user_id_3","user_id_4","user_id_9"]
        },
        {
            attendance_date:"2020-10-30",
            attended_users:["user_id_1","user_id_2","user_id_4","user_id_9"]
        }
    ]
)



// Creating collection "topics" and inserting documents
db.topics.insertMany(
    [
        {
            topic_name:"topic_name_1",
            topic_id:"topic_id_1",
            topic_date:"2020-10-01"
        },
        {
            topic_name:"topic_name_2",
            topic_id:"topic_id_2",
            topic_date:"2020-10-15"
        },
        {
            topic_name:"topic_name_3",
            topic_id:"topic_id_3",
            topic_date:"2020-10-30"
        }
    ]
)



// Creating collection "tasks" and inserting documents
db.tasks.insertMany(
    [
        {
            task_name:"task_name_1",
            task_id:"task_id_1",
            task_date:"2020-10-01",
            submitted_by: ["user_id_3","user_id_4","user_id_8","user_id_9"]
        },
        {
            task_name:"task_name_2",
            task_id:"task_id_2",
            task_date:"2020-10-15",
            submitted_by: ["user_id_1","user_id_3","user_id_4","user_id_9"]
        },
        {
            task_name:"task_name_3",
            task_id:"task_id_3",
            task_date:"2020-10-30",
            submitted_by: ["user_id_1","user_id_2","user_id_4","user_id_9"]
        }
    ]
)


// Creating collection "company_drives" and inserting documents
db.company_drives.insertMany(
    [
        {
            company_name:"company_name_1",
            company_id:"company_id_1",
            company_drive_date:"2020-10-10",
            users_appeared:["user_id_1","user_id_2","user_id_3","user_id_4","user_id_8","user_id_9"]
        },
        {
            company_name:"company_name_2",
            company_id:"company_id_2",
            company_drive_date:"2020-10-25",
            users_appeared:["user_id_1","user_id_2","user_id_4","user_id_9"]
        },
        {
            company_name:"company_name_3",
            company_id:"company_id_3",
            company_drive_date:"2020-10-27",
            users_appeared:["user_id_1","user_id_2","user_id_3","user_id_4","user_id_9"]
        }
    ]
)



// Creating collection "mentors" and inserting documents
db.mentors.insertMany(
    [
        {
            mentor_name:"mentor_name_1",
            mentor_id:"mentor_id_1",
            mentees:["user_id_1","user_id_2","user_id_3","user_id_4","user_id_5","user_id_6","user_id_7","user_id_8","user_id_9","user_id_10","user_id_11","user_id_12","user_id_13","user_id_14","user_id_15","user_id_16"]
        },
        {
            mentor_name:"mentor_name_2",
            mentor_id:"mentor_id_2",
            mentees:["user_id_17"]
        },
        {
            mentor_name:"mentor_name_3",
            mentor_id:"mentor_id_3",
            mentees:["user_id_18"]
        }
    ]
)







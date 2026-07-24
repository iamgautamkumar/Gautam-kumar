// Student Database
const students = [
    {
        name: "Gautam Kumar",
        roll: "2025-CSE-04",
        branch: "Computer Science Engineering",
        semester: "3rd",
        college: "Government Polytechnic Supaul",
        email: "gautamkumarmandal852113@gmail.com",
        mobile: "7545916505"
    },
    {
        name: "Ravishankar kumar",
        roll: "2025-CSE-01",
        branch: "Computer Science and engineering",
        semester: "3rd",
        college: "Government Polytechnic Suapul",
        email: "ravishankar723655@gmail.com",
        mobile: "9234790811"
    },
    {
        name: "Rishi raj",
        roll: "2025-CSE-02",
        branch: "Computer Science and Enggineering",
        semester: "3rd",
        college: "Government Polytechnic supaul",
        email: "rishiraj91071@gmail.com",
        mobile: "9102371025"
    },
    {
        name: "Kaushal kumar",
        roll: "2025-CSE-03",
        branch: "Computer Science and Enggineering",
        semester: "3rd",
        college: "Government Polytechnic Supaul",
        email: "mrkaushal92633@gmail.com",
        mobile: "6206610425"
    }
    ,
    {
        name: "Shobha Mishra",
        roll: "2025-CSE-06",
        branch: "Computer Science and Enggineering",
        semester: "3rd",
        college: "Government Polytechnic Supaul",
        email: "mishrashobha895@gmail.com",
        mobile: "7091417187"
    }

    ,
    {
        name: "Ishika kumari",
        roll: "2025-CSE-08",
        branch: "Computer Science and Enggineering",
        semester: "3rd",
        college: "Government Polytechnic Supaul",
        email: "isha22564@gmail.com",
        mobile: "9135090580"
    },
    {
        name: "Prachi kumari",
        roll: "2025-CSE-10",
        branch: "Computer Science and Enggineering",
        semester: "3rd",
        college: "Government Polytechnic Supaul",
        email: "prachikumari78912@gmail.com",
        mobile: "7764998076"
    }
,
    {
        name: "Rahul kumar",
        roll: "2025-CSE-11",
        branch: "Computer Science and Enggineering",
        semester: "3rd",
        college: "Government Polytechnic Supaul",
        email: "rahulchauraha17@gmail.com",
        mobile: "7696722161"
    }
,
    {
        name: "Keshav kumar thakur",
        roll: "2025-CSE-12",
        branch: "Computer Science and Enggineering",
        semester: "3rd",
        college: "Government Polytechnic Supaul",
        email: "keshavkumarthakur7808@gmail.com",
        mobile: "8825327808"
    }
,
    {
        name: "Shankar kumar ",
        roll: "2025-CSE-14",
        branch: "Computer Science and Enggineering",
        semester: "3rd",
        college: "Government Polytechnic Supaul",
        email: "shankarkumarchy398@gmail.com",
        mobile: "7739746771"
    }
,
    {
        name: "Shivansh jha",
        roll: "2025-CSE-17",
        branch: "Computer Science and Enggineering",
        semester: "3rd",
        college: "Government Polytechnic Supaul",
        email: "no data",
        mobile: "7633914162"
    }
,
    {
        name: "Vivek kumar",
        roll: "2025-CSE-19",
        branch: "Computer Science and Enggineering",
        semester: "3rd",
        college: "Government Polytechnic Supaul",
        email: "no data",
        mobile: "9523914644"
    }
,
    {
        name: "Aditi kumari",
        roll: "2025-CSE-23",
        branch: "Computer Science and Enggineering",
        semester: "3rd",
        college: "Government Polytechnic Supaul",
        email: "ak6488153@gmail.com",
        mobile: "7903291973"
    }
,
    {
        name: "Ankita kumari",
        roll: "2025-CSE-26",
        branch: "Computer Science and Enggineering",
        semester: "3rd",
        college: "Government Polytechnic Supaul",
        email: "no data",
        mobile: "9572595381"
    }
,
    {
        name: "Sidharth kumar",
        roll: "2025-CSE-29",
        branch: "Computer Science and Enggineering",
        semester: "3rd",
        college: "Government Polytechnic Supaul",
        email: "no data",
        mobile: "6203758390"
    }
,
    {
        name: "Sneha kumari",
        roll: "2025-CSE-30",
        branch: "Computer Science and Enggineering",
        semester: "3rd",
        college: "Government Polytechnic Supaul",
        email: "no data",
        mobile: "9135383851"
    }
,
    {
        name: "Anshu kumari",
        roll: "2025-CSE-09",
        branch: "Computer Science and Enggineering",
        semester: "3rd",
        college: "Government Polytechnic Supaul",
        email: "anshukumari9430570038@gmail.com",
        mobile: "9430570038"
    }
,
    {
        name: "Suraj kumar",
        roll: "2025-CSE-58",
        branch: "Computer Science and Enggineering",
        semester: "3rd",
        college: "Government Polytechnic Supaul",
        email: "no data",
        mobile: "9771261409"
    }


];

// Search Function
function searchStudent() {

    const input = document
        .getElementById("search")
        .value
        .trim()
        .toLowerCase();

    const result = document.getElementById("result");

    const student = students.find(s =>
        s.name.toLowerCase() === input ||
        s.roll === input
    );

    if (student) {

        result.innerHTML = `
            <h2>Student Details</h2>
            <hr><br>

            <p><strong>Name :</strong> ${student.name}</p>
            <p><strong>Roll Number :</strong> ${student.roll}</p>
            <p><strong>Branch :</strong> ${student.branch}</p>
            <p><strong>Semester :</strong> ${student.semester}</p>
            <p><strong>College :</strong> ${student.college}</p>
            <p><strong>Email :</strong> ${student.email}</p>
            <p><strong>Mobile :</strong> ${student.mobile}</p>
        `;

    } else {

        result.innerHTML = `
            <h2 style="color:red;">
                Student Not Found
            </h2>
        `;

    }
}
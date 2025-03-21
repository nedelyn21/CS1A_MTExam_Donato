let DSA = [];
let WebDev = [];

function enrollStudent(subjectArray) {
    let studentName = prompt("Enter the student's name:");
    if (studentName) {
 
subjectArray.push(studentName);
        alert('${studentName} has been enrolled.');
    }
}

function unenrollStudent(subjectArray){
    if (subjectArray.length === 0) {
        alert("No students enrollrd in this subject.");
        return;
    }

    alert('Currently enrolled student: ${subjectArray.join(",")}');
    let studentName = prompt("Enter teh student's name to unenroll:");

    let index = subjectArray.indexOf(studentName);
    if (index !== -1) {
        subjectArray.splice(index,1);
        alert('${studentName} has been unenrolled.');
    }
}

function main() {
    while (true) {
        let subjectChoice = prompt("Select a subject:\n(A) DSA\n(B) WebDev\n(C) Exit").toLowerCase();
        let subjectArray;

        if
         (subjectChoice === "a") {
            subjectArray = DSA;
        } else if (subjectChoice === "b") {
            subjectArray = WebDev;
        } else if (subjectChoice === "c") {
            break;
        } else {
            alert("Invalid choice. Try again.");
            continue;
        }

        while (true) {
            let operation = prompt("Choose an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit").toLowerCase();

            if (operation === "a") {
                enrollStudent(subjectArray);
            } else if (operation === "b") {
                unenrollStudent(subjectArray);
            } else if (operation === "c") {
                break;
            } else if (operation === "d") {
                alert('Final Enrollment:\nDSA:${DSA.join(",")}\n WebDev:${WebDev.join(",")}');
                return;
            } else {
                alert("Invalid choice. Try again.");    
            }
        }
    }
}
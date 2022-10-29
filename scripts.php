<?php
//INCLUDE DATABASE FILE
use LDAP\Result;

include('database.php');
//SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
session_start();

//ROUTING
if (isset($_POST['save']))
    saveTask();
if (isset($_POST['update']))
    updateTask();
if (isset($_POST['delete']))
    deleteTask();


function getTasks($status)
{
    //CODE HERE
    $connect=connection();

    //SQL SELECT
        #select all the data
        $sql = "SELECT * FROM tasks WHERE status_id = '$status'";
                $result = mysqli_query($connect, $sql);
        #for emotes & counts
        if($status == 1)
        {
            $icon = 'far fa-question-circle';
            $_SESSION['countToDo'] = mysqli_num_rows($result);
        }
            if($status == 2)
        {
            $icon = 'fas fa-circle-notch fa-spin';
            $_SESSION['countInProgress'] = mysqli_num_rows($result);
        }
            if($status == 3)
        {
            $icon = 'far fa-circle-check';
            $_SESSION['countDone'] = mysqli_num_rows($result);
        }

        #to excute the query

        if(mysqli_num_rows($result) > 0)        
        {
            $index = 0;
            while($fetch = mysqli_fetch_assoc($result))
            {
                
                {
                    
                    echo '
                    <button href="#modal-task" id="'.$fetch['id'].'" data-bs-toggle="modal" onclick="editTask('.$fetch['id'].')" class="list-group-item list-group-item-action d-flex">
                        <div class="me-3 fs-16px">
                            <i class=" '.$icon.' text-green fa-fw"></i>
                        </div>
                        <div class="flex-fill w-75">
                            <div class="fs-14px lh-12 mb-2px fw-bold text-dark text-truncate">'.$fetch['title'].'</div>
                            <div class="mb-1 fs-12px">
                                <div class="text-gray-600 flex-1">#'.$fetch['id'].' created in '.$fetch['task_datetime'].'</div>
                                <div class="text-gray-900 flex-1 text-truncate" title="'.$fetch['description'].'">'.$fetch['description'].'</div>
                            </div>
                            <div class="mb-1">
                                <p hidden>'.$fetch['id'].'</p>
                                <span class="badge bg-primary">'.$fetch['priority_id'].'</span>
                                <span class="badge bg-gray-300 text-gray-900">'.$fetch['type_id'].'</span>
                            </div>
                        </div>
                    </button> ';
                    $index++;
                }
            }
        }
     else{
        echo "No records matching your query were found.";
        }
}

function saveTask()
{
    //CODE HERE
    $id = $_POST["id"];
    $title = $_POST["title"];
    $type = $_POST["task-type"];
    $priority = $_POST["priority"];
    $status = $_POST["status"];
    $taskDate = $_POST["date"];
    $description = $_POST["description"];
    $connect=connection();
    //SQL INSERT //sql query
    $sql = "INSERT INTO `tasks` values (null,'$title','$type','$priority','$status','$taskDate','$description')";

    $result = mysqli_query($connect, $sql);#to excute the query
    if ($result) {
        echo "Data inserted successfully";
    } else {
        echo "did not inserted";
        die(mysqli_error($connect));
    }
    $_SESSION['message'] = "Task has been added successfully !";
    header('location: index.php');
}

function updateTask()
{
    //CODE HERE
    //SQL UPDATE
    $_SESSION['message'] = "Task has been updated successfully !";
    header('location: index.php');
}

function deleteTask()
{
    //CODE HERE
    //SQL DELETE
    $_SESSION['message'] = "Task has been deleted successfully !";
    header('location: index.php');
}

?>
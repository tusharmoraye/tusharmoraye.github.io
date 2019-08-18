const data = {
  projects: [
    {
      name: "Hadoop based Face Recognition App",
      discription:
        "Configured Hadoop cluster and used LBPH face recognition algorithm. Wrote Map-Reduce task to distribute processing on Hadoop cluster.",
      link: "https://github.com/tusharmoraye/hadoop_based_face_recognition"
    },
    {
      name: "Android app for voice controlled door lock",
      discription:
        "Configured Arduino Uno with Bluetooth and Servo motor. Developed android app to control door lock.",
      link:
        "https://github.com/tusharmoraye/Android_Voice_Controlled_Arduino_Bluetooth_Servo_Door_Lock"
    },
    {
      name: "Android app to sync data in SQLite to MySQL server",
      discription:
        "Developed Android app to save rows of data in SQLite database on device. Implemented functionality to sync the data rows from device and MySQL server.",
      link: "https://github.com/tusharmoraye/Android_SqLite_sync_MySQL_server"
    },
    {
      name: "Car Driving Using Reinforcement Learning",
      discription:
        "Built neural network by using Keras. Trained neural network to automate the driving.",
      link: "https://github.com/tusharmoraye/car-driving-reinforcement-learning"
    }
  ]
};

function createCard(project) {
  let container = document.createElement("div");
  container.className =
    "col-lg-4 col-md-6 offset-md-0 col-sm-10 offset-sm-1 col-12 p-3 project";
  let card = document.createElement("div");
  card.className = "card shadow p-3 ";
  let cardTitle = document.createElement("h5");
  cardTitle.textContent = project.name;
  cardTitle.className = "card-title";
  let cardBody = document.createElement("p");
  cardBody.textContent = project.discription;
  cardBody.className = "card-body";
  let viewCodeBtn = document.createElement("button");
  viewCodeBtn.innerText = "View Source Code";
  viewCodeBtn.className = "view-code-btn";
  let link = document.createElement("a");
  link.href = project.link;
  link.target = "_blank";
  link.appendChild(viewCodeBtn);
  card.appendChild(cardTitle);
  card.appendChild(cardBody);
  card.appendChild(link);
  container.appendChild(card);
  return container;
}

function createView(projects) {
  let container = document.querySelector("#project-view");
  while (container.firstChild) {
    container.firstChild.remove();
  }
  projects.map(project => container.appendChild(createCard(project)));
  return;
}

createView(data.projects);

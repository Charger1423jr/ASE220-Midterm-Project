function saveNote() {
                                var cardDiv = document.createElement("div");
                                cardDiv.className = "card";
                                cardDiv.style.width = "18rem";

                                var cardBodyDiv = document.createElement("div");
                                cardBodyDiv.className = "card-body";

                                var cardTitle = document.createElement("h5");
                                cardTitle.className = "card-title";
                                cardTitle.textContent = document.querySelector('textarea[id="noteTitle"]').value;


                                var cardText = document.createElement("p");
                                cardText.className = "card-text";
                                cardText.textContent = document.querySelector('textarea[id="noteBody"]').value;

                                var deleteButton = document.createElement("button");
                                deleteButton.textContent = "Delete";
                                deleteButton.className = "btn btn-danger delete";

                                deleteButton.addEventListener("click", function() {

                                    cardDiv.parentNode.removeChild(cardDiv);
                                    clearData();
                                });

                                cardBodyDiv.appendChild(cardTitle);
                                cardBodyDiv.appendChild(cardText);
                                cardBodyDiv.appendChild(deleteButton);
                                cardDiv.appendChild(cardBodyDiv);

                                document.body.appendChild(cardDiv);




                    var titleNote = document.getElementById('noteTitle').value;
                            var bodyNote = document.getElementById('noteBody').value;


                            var data = {
                                "title": titleNote,
                                "body": bodyNote
                            };


                            var jsonData = JSON.stringify(data);

                            var putRequest = new XMLHttpRequest();


                            putRequest.open("PUT", "https://jsonblob.com/api/jsonBlob/1213529134507876352");

                            putRequest.setRequestHeader("Content-Type", "application/json");


                            putRequest.send(jsonData);

                            putRequest.onload = function() {
                                if (putRequest.status === 200) {
                                    console.log("Data saved successfully");
                                } else {
                                    console.error("Failed to save data");
                                }
                            };
                            }


function deleteAllCards() {
                        var cardDivs = document.querySelectorAll(".card");

                        cardDivs.forEach(function(cardDiv) {
                            cardDiv.parentNode.removeChild(cardDiv);
                        });
                    }

function clearData() {
    fetch('https://jsonblob.com/api/jsonBlob/1213529134507876352', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            console.log('Data cleared successfully');
        } else {
            console.error('Failed to clear data:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Failed to clear data:', error);
    });
}


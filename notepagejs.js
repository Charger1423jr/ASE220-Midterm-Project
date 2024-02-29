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
                                });

                                cardBodyDiv.appendChild(cardTitle);
                                cardBodyDiv.appendChild(cardText);
                                cardBodyDiv.appendChild(deleteButton);
                                cardDiv.appendChild(cardBodyDiv);

                                document.body.appendChild(cardDiv);
                            }



function deleteAllCards() {
                        var cardDivs = document.querySelectorAll(".card");

                        cardDivs.forEach(function(cardDiv) {
                            cardDiv.parentNode.removeChild(cardDiv);
                        });
                    }




let div = document.getElementById("container");
console.log(typeof(div));

for (let i = 0; i < 5; i++) {
    // Create the <a> element
    let link = document.createElement("a");
    link.href = "#"; // Optional: Add a URL if needed

    // Create the <p6> element with "Topic" text
    let topic = document.createElement("h3");
    topic.setAttribute("style","font-weight: bold");
    topic.innerText = "Topic";
    link.appendChild(topic);

    let br = document.createElement("br");
    link.appendChild(br); // Add <br> for line break

    // Create the <p> element with lorem ipsum text
    let loremText = document.createElement("p");
    loremText.innerText = "Lorem ipsum...";
    link.appendChild(loremText);

    div.appendChild(link);
    div.appendChild(br);
}


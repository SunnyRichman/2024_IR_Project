document.addEventListener("DOMContentLoaded", () => {
    // Select the first element with the class "container"
    let div = document.getElementsByClassName("container")[0];
    
    // Check if the container exists before appending
    if (!div) {
        console.error("Element with class 'container' not found.");
        return;
    }

    for (let i = 0; i < 5; i++) {
        // Create the <a> element
        let link = document.createElement("a");
        link.href = "#"; // Optional: Add a URL if needed

        // Create the <p6> element with "Topic" text
        let topic = document.createElement("p6");
        topic.innerText = "Topic";
        link.appendChild(topic);

        let br = document.createElement("br");
        link.appendChild(br); // Add <br> for line break

        // Create the <p> element with lorem ipsum text
        let loremText = document.createElement("p");
        loremText.innerText = "Lorem ipsum...";
        link.appendChild(loremText);

        // Append the <a> tag to the container
        div.appendChild(link);
        div.appendChild(br);
    }
});

function loadResults() {
    let url = window.location.href;
    let query = url.split("?")[1];  // Only get the part after "?"
    _title = (query.split("=")[1]).replaceAll("+", " ");
    
    // Start timer for fetch
    let startTime = performance.now();

    fetch("http://localhost:3100/callSearch?" + query)
    .then((res) => res.json()) // Convert response to JSON
    .then((data) => {
        // Calculate the time taken for the request
        let endTime = performance.now();
        let timeTaken = ((endTime - startTime) / 1000).toFixed(10); // Time in seconds

        console.log(data);

        document.title = _title + " - Search results";
        let div = document.getElementById("container");

        // Check if there are any results
        if (data.length === 0) {
            // If no results, display a "No results found" message
            let noResultsMessage = document.createElement("p");
            noResultsMessage.innerText = "No results found for your search.";
            div.appendChild(noResultsMessage);
        } else {
            // Display the number of results and the time taken
            let resultInfo = document.createElement("p");
            resultInfo.innerText = `${data.length} results found in ${timeTaken} seconds.`;
            div.appendChild(resultInfo);

            // Loop through the results and display each one
            for (let i = 0; i < data.length; i++) {
                // Create the main clickable container
                let link = document.createElement("a");
                link.href = "/detail?id=" + data[i]._id;
                link.setAttribute("style", "display: flex; text-decoration: none; margin-top: 10px;");

                // Left side: Image container
                let imageContainer = document.createElement("div");
                imageContainer.setAttribute("style", "margin-right: 10px;");
                let image = document.createElement("img");
                image.src = data[i]._source.Img;
                imageContainer.appendChild(image);

                // Right side: Information container
                let infoContainer = document.createElement("div");

                // Topic (h3 element)
                let topic = document.createElement("h3");
                topic.setAttribute("style", "font-weight: bold;");
                topic.innerText = data[i]._source.Name[0] + " | " + data[i]._source.Name[1] + " | " + data[i]._source.Name[2];
                infoContainer.appendChild(topic);

                // Indication usage (p element)
                let indicationUsage = document.createElement("p");
                let string = "Properties & Actions: " + data[i]._source.propertiesActions.substring(0, 50) + "...<br>" +
                             "Indications & Usage: " + data[i]._source.indicationsUsage.substring(0, 50) + "...<br>read more";
                indicationUsage.innerHTML = string;
                infoContainer.appendChild(indicationUsage);

                // Append the left (image) and right (info) containers to the link
                link.appendChild(imageContainer);
                link.appendChild(infoContainer);

                // Append the link to the main container
                div.appendChild(link);
            }
        }
    }).catch((err) => console.log(err));
}

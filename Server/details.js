function loadDetail(){

    let url = window.location.href;
    let query = url.split("?")[1];  // Only get the part after "?"
    fetch("http://localhost:3100/callDetail?" + query)
    .then((res) => res.json())      // Convert response to JSON
    .then((data) => {
    console.log(data);

    document.title = data[0]._source.Name[0]+" | "+data[0]._source.Name[1]+" | "+data[0]._source.Name[2];

    let left = document.getElementById("column_left");
    
    var img = document.createElement("img");
    img.src = data[0]._source.Img;
    left.appendChild(img);

    let table = document.createElement("TABLE")
    
    let tr = document.createElement("TR");
    let th = document.createElement("TH");
    let td = document.createElement("TD");

    tr.setAttribute("class","even")
    th.innerText = "Herb ID";
    td.innerText = data[0]._id;
    tr.appendChild(th);
    tr.appendChild(td);

    table.appendChild(tr);

    tr = document.createElement("TR");
    tr.setAttribute("class","odd")
    th = document.createElement("TH");
    td = document.createElement("TD");
    th.innerText = "Chinese Name";
    td.innerText = data[0]._source.Name[0];
    tr.appendChild(th);
    tr.appendChild(td);

    table.appendChild(tr);

    tr = document.createElement("TR");
    tr.setAttribute("class","even")
    th = document.createElement("TH");
    td = document.createElement("TD");
    th.innerText = "English Name";
    td.innerText = data[0]._source.Name[1];
    tr.appendChild(th);
    tr.appendChild(td);

    table.appendChild(tr);

    tr = document.createElement("TR");
    tr.setAttribute("class","odd")
    th = document.createElement("TH");
    td = document.createElement("TD");
    th.innerText = "Scientific Name";
    td.innerText = data[0]._source.Name[2];
    tr.appendChild(th);
    tr.appendChild(td);

    table.appendChild(tr);

    tr = document.createElement("TR");
    tr.setAttribute("class","even")
    th = document.createElement("TH");
    td = document.createElement("TD");
    th.innerText = "Family and Genus";
    td.innerText = data[0]._source.familyGenus;
    tr.appendChild(th);
    tr.appendChild(td);

    table.appendChild(tr);

    tr = document.createElement("TR");
    tr.setAttribute("class","odd")
    th = document.createElement("TH");
    td = document.createElement("TD");
    th.innerText = "Part Used";
    td.innerHTML = data[0]._source.partUsed;
    tr.appendChild(th);
    tr.appendChild(td);

    table.appendChild(tr);

    tr = document.createElement("TR");
    tr.setAttribute("class","even")
    th = document.createElement("TH");
    td = document.createElement("TD");
    th.innerText = "Harvest & Processing";
    td.innerHTML = data[0]._source.harvestProcessing;
    tr.appendChild(th);
    tr.appendChild(td);

    table.appendChild(tr);

    tr = document.createElement("TR");
    tr.setAttribute("class","odd")
    th = document.createElement("TH");
    td = document.createElement("TD");
    th.innerText = "Properties & Actions";
    td.innerHTML = data[0]._source.propertiesActions;
    tr.appendChild(th);
    tr.appendChild(td);

    table.appendChild(tr);

    tr = document.createElement("TR");
    tr.setAttribute("class","even")
    th = document.createElement("TH");
    td = document.createElement("TD");
    th.innerText = "Indications & Usage";
    td.innerHTML = data[0]._source.indicationsUsage;
    tr.appendChild(th);
    tr.appendChild(td);

    table.appendChild(tr);

    let right = document.getElementById("column_right");
    right.appendChild(table)

    
    }).catch((err) => console.log(err));
}
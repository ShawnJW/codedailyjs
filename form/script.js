let countryStateInfo = {
    "USA": {
        "California": {

        },
        "Texas": {

        }
    },
    "Canada": {
        "Alberta": {

        },
        "British Columbia": {

        }
    }
}


window.onload = function () {

    //Get html elements
    let countrySel = document.getElementById("countrySel");
    let stateSel = document.getElementById("stateSel");


    //Load countries
    for (let country in countryStateInfo) {
        countrySel.options[countrySel.options.length] = new Option(country, country);
    }

    //County Changed
    countrySel.onchange = function () {

        stateSel.length = 1; // remove all options bar first

        if (this.selectedIndex < 1)
            return; // done

        for (let state in countryStateInfo[this.value]) {
            stateSel.options[stateSel.options.length] = new Option(state, state);
        }
    }

    //State Changed
    stateSel.onchange = function () {


        if (this.selectedIndex < 1)
            return; // done

    }
}



function submitform()
{

    // GET FORM DATA
    let form = document.getElementById("testForm");
    let data = new FormData(form);

    //  AJAX REQUEST
    // POST DATA TO SERVER, RETURN RESPONSE AS TEXT
    fetch("our-server.html", { method:"POST", body:data })
        .then(res=>res.text())

        // SHOW HIDE ELEMENTS ON SERVER RESPONSE
        .then((response) => {
            console.log(response);
            if (response == "OK") {
                // alert("SUCCESSFUL!");
                document.getElementById('testForm').style.display = "none";
                if (window.matchMedia("(max-width: 768px)").matches) {
                    document.getElementById('thank-you').style.display = "block";

                } else {
                    document.getElementById('thank-you').style.display = "flex";

                }
            }
            else { alert("FAILURE!"); }
        })

        .catch((err) => { console.error(err); });

    // (C) PREVENT FORM SUBMIT
    return false;
}

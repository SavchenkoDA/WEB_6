function price()
{
    var a = Number(document.getElementById("quantity").value);
    let b = document.getElementsByName("type");
    let select = b[0];
    let c = 0;
    let d = prices();
    let e = parseInt(select.value) - 1;
    if (e >= 0)
    {
        c = d.types[e];
    }
    let f = document.getElementById("options");
    f.style.display = (select.value == "2" ? "block" : "none");
    let g = document.getElementsByName("options");
    g.forEach(function(radio) 
    {
        if (radio.checked) 
        {
            let h = d.options[radio.value];
            if (h !== undefined && select.value == "2") 
            {
                c += h;
            }
        }
    });
    let i = document.getElementById("properties");
    i.style.display = (select.value == "3" ? "block" : "none");
    let j = document.querySelectorAll("#properties input");
    j.forEach(function(checkbox)
    {
        if (checkbox.checked) 
        {
            let k = d.properties[checkbox.name];
            if (k !== undefined && select.value == "3") 
            {
                c += k;
            }
        }
    });
    if (!(/^(0|[1-9][0-9]*)$/).test(a) || document.getElementById("quantity").value == "")
    {
        alert("Вы ввели неверные данные");
    }
    else
    {
        c *= a;
        document.getElementById("pay").innerHTML = "Стоимость равна: " + c;
    }
}
function prices()
{
    return {
        types: [8, 88, 888],
        options:
        {
            gray: 5,
            brown: 10,
            crimson: 15,
        },
        properties:
        {
            fluffy: 1,
            sheared: 2,
        }
    };
}
document.addEventListener('DOMContentLoaded', function (event) 
{
    let f = document.getElementById("options");
    f.style.display = "none";
    let a = document.getElementById("quantity");
    a.addEventListener("change", function(event)
    {
        let t = event.target;
        console.log(t.value);
        price();
    });
    let b = document.getElementsByName("type");
    let select = b[0];
    select.addEventListener("change", function(event) 
    {
        let target = event.target;
        console.log(target.value);
        price();
    });
    let radios = document.getElementsByName("options");
    radios.forEach(function(radio) 
    {
        radio.addEventListener("change", function(event) 
        {
            let r = event.target;
            console.log(r.value);
            price();    
        });
    });
    let p = document.getElementById("properties");
    p.style.display = "none";
    let checkboxes = document.querySelectorAll("#properties input");
    checkboxes.forEach(function(checkbox) 
    {
        checkbox.addEventListener("change", function(event) 
        {
            let c = event.target;
            console.log(c.name);
            console.log(c.value);
            price();
        });
    });
});

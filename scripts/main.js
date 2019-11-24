// Convert values function
function calculatevalues() {

    const EnteredValue = document.getElementById("tvValue").value;
    const lblUnit = document.getElementById("lblunits");
    const lblDp = document.getElementById("dptxt");
    const lblSp = document.getElementById("sptxt");
    const lblMm = document.getElementById("mmtxt");
    const lblInh = document.getElementById("intxt");
    const lblPx = document.getElementById("pxtxt");
    const lblPt = document.getElementById("pttxt");

    if (EnteredValue.length == 0) { 
        alert('Enter some value first!');
        lblPx.innerHTML = "00.00";
    } else {

    var px=0, mm=0, pt=0, dp=0, inh=0, sp=0;
    var dpi=120;

    const densityValue = document.getElementById("densityValue");
    var option = densityValue.options[densityValue.selectedIndex].value;

    if(option == "v1"){
        dpi = 120;
    }else if(option == "v2"){
        dpi = 160;
    }else if(option == "v3"){
        dpi = 213;
    }else if(option == "v4"){
        dpi = 240;
    }else if(option == "v5"){
        dpi = 320;
    }else if(option == "v6"){
        dpi = 480;
    }else if(option == "v7"){
        dpi = 640;
    }


    if(lblUnit.innerHTML  == "Pixel [px]"){
    //px to units converter
    lblPx.innerHTML = EnteredValue;
    px = EnteredValue;

    dp = px * 160 / dpi;
    lblDp.innerHTML = dp.toFixed(3);
    lblSp.innerHTML = dp.toFixed(0);

    mm = px / dpi * 25.4;
    lblMm.innerHTML = mm.toFixed(3);

    inh = px / dpi;
    lblInh.innerHTML = inh.toFixed(3);

    pt = px * 72 / dpi;
    lblPt.innerHTML = pt.toFixed(3);

    }else if(lblUnit.innerHTML  == "Density Pixel [dp]"){
    //dp to units converter
    lblDp.innerHTML = EnteredValue;
    lblSp.innerHTML = EnteredValue;
    dp = EnteredValue;

    px = dp * dpi / 160;
    lblPx.innerHTML = px.toFixed(3);
   
    mm = px / dpi * 25.4;
    lblMm.innerHTML = mm.toFixed(3);

    inh = px / dpi;
    lblInh.innerHTML = inh.toFixed(3);

    pt = px * 72 / dpi;
    lblPt.innerHTML = pt.toFixed(3);
        
    }else if(lblUnit.innerHTML  == "Scale Pixel [sp]"){
    //sp to units converter
    lblSp.innerHTML = EnteredValue;
    sp = EnteredValue;

    px = sp * dpi / 160;
    lblPx.innerHTML = px.toFixed(3);

    dp = px * 160 / dpi;
    lblDp.innerHTML = dp.toFixed(3);
   
    mm = px / dpi * 25.4;
    lblMm.innerHTML = mm.toFixed(3);

    inh = px / dpi;
    lblInh.innerHTML = inh.toFixed(3);

    pt = px * 72 / dpi;
    lblPt.innerHTML = pt.toFixed(3);

    }else if(lblUnit.innerHTML  == "Point [pt]"){
    //pt to units converter
    lblPt.innerHTML = EnteredValue;
    pt = EnteredValue;

    inh = pt / 72;
    lblInh.innerHTML = inh.toFixed(3);

    mm = inh * 25.4;
    lblMm.innerHTML = mm.toFixed(3);
   
    px = inh * dpi;
    lblPx.innerHTML = px.toFixed(3);

    dp = px * 160 / dpi;
    lblDp.innerHTML = dp.toFixed(3);
    lblSp.innerHTML = dp.toFixed(0);

    }else if(lblUnit.innerHTML  == "MilliMeter [mm]"){
    //mm to units converter
    lblMm.innerHTML = EnteredValue;
    mm = EnteredValue;

    inh = mm / 25.4;
    lblInh.innerHTML = inh.toFixed(3);

    pt = inh * 72;
    lblPt.innerHTML = pt.toFixed(3);
   
    px = inh * dpi;
    lblPx.innerHTML = px.toFixed(3);

    dp = px * 160 / dpi;
    lblDp.innerHTML = dp.toFixed(3);
    lblSp.innerHTML = dp.toFixed(0);

    }else if(lblUnit.innerHTML  == "Inches [in]"){
    //inh to units converter
    lblInh.innerHTML = EnteredValue;
    inh = EnteredValue;

    px = inh * dpi;
    lblPx.innerHTML = px.toFixed(3);

    dp = px * 160 / dpi;
    lblDp.innerHTML = dp.toFixed(3);
    lblSp.innerHTML = dp.toFixed(0);

    pt = px * 72 / dpi;
    lblPt.innerHTML = pt.toFixed(3);
   
    mm = inh * 25.4;
    lblMm.innerHTML = mm.toFixed(3);
    }
    }
}

// Change Units values function
function changeUnits(){
    const lblUnit = document.getElementById("lblunits");

    if(lblUnit.innerHTML  == "Pixel [px]"){
        lblUnit.innerHTML = "Density Pixel [dp]";
    }else if(lblUnit.innerHTML  == "Density Pixel [dp]"){
        lblUnit.innerHTML = "Scale Pixel [sp]";
    }else if(lblUnit.innerHTML  == "Scale Pixel [sp]"){
        lblUnit.innerHTML = "Point [pt]";
    }else if(lblUnit.innerHTML  == "Point [pt]"){
        lblUnit.innerHTML = "MilliMeter [mm]";
    }else if(lblUnit.innerHTML  == "MilliMeter [mm]"){
        lblUnit.innerHTML = "Inches [in]";
    }else if(lblUnit.innerHTML  == "Inches [in]"){
        lblUnit.innerHTML = "Pixel [px]";
    }
}


window.onload = function(){

    document.getElementById("btnChangeUnits").onclick=function(){
        changeUnits()
    }
    document.getElementById("btnconvertValue").onclick=function(){
        calculatevalues()
    }

}
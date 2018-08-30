//TIMER///////////////
window.setInterval(function(){

    levelText();
    showactualIncome();
    calcMoney();
    craftMatches();
    craftBoxes();
    craftMatchboxes();

}, 1000);

var money = 0;
var income = 0;
var outcome = 0;
var clicker = 0;
var allStaff = 0;
var companyName = "";
var storageSpace = 50;


///Assemble Stuff/////
///Matchbox///
///Resource Var//////////////

var wood = 0;
var phosphorus = 0;
var cardboard = 0;
var boxes = 0;
var matches = 0;
var matchboxes = 0;
var woodIndicator = 0;

////Function Crafting//////////////

    function craftMatches()
    { 
    if (wood > 0 && phosphorus > 0) 
        {
        wood = wood - 1;
        phosphorus = phosphorus - 1;
        matches = matches + 1;
        storageSpace = storageSpace - 1;
        document.getElementById("_matches").innerHTML = matches;
        document.getElementById("_wood").innerHTML = wood;
        document.getElementById("_phosphorus").innerHTML = phosphorus;
        document.getElementById("_storageSpace").innerHTML = storageSpace;
        }
    }
    function craftBoxes() 
    {
    if (cardboard > 0) 
        {
        cardboard = cardboard - 1;
        boxes = boxes + 1;
        storageSpace = storageSpace - 1;
        document.getElementById("_boxes").innerHTML = boxes;
        document.getElementById("_cardboard").innerHTML = cardboard;
        document.getElementById("_storageSpace").innerHTML = storageSpace;
        }
    }
    function craftMatchboxes()
    {
    if (boxes > 0 && matches > 0) 
        {
        boxes = boxes - 1;
        matches = matches - 1;
        matchboxes = matchboxes + 1;
        storageSpace = storageSpace - 1;
        document.getElementById("_matchboxes").innerHTML = matchboxes;
        document.getElementById("_matches").innerHTML = matches;
        document.getElementById("_boxes").innerHTML = boxes;
        document.getElementById("storageMatchboxes").innerHTML = matchboxes;
        document.getElementById("_storageSpace").innerHTML = storageSpace;
        }
    }
    /// Function addStuff
    function addWood()
    {
    wood++;
    storageSpace = storageSpace - 1;
    document.getElementById("_wood").innerHTML = wood;
    document.getElementById("_storageSpace").innerHTML = storageSpace;
    }
    function addWoodByIndicator(indicator)
    {
        wood = wood + indicator;
    }
    function addPhosphorus()
    {
    phosphorus++;
    storageSpace = storageSpace - 1;
    document.getElementById("_phosphorus").innerHTML = phosphorus;
    document.getElementById("_storageSpace").innerHTML = storageSpace;
    }
    function addCardboard()
    {
    cardboard++;
    storageSpace = storageSpace - 1;
    document.getElementById("_cardboard").innerHTML = cardboard;
    document.getElementById("_storageSpace").innerHTML = storageSpace;
    }
    function addBoxes() 
    {
    boxes++;
    storageSpace = storageSpace - 1;
    document.getElementById("_boxes").innerHTML = boxes;
    document.getElementById("_storageSpace").innerHTML = storageSpace;
    }
    function addMatches()
    {
    matches++;
    storageSpace = storageSpace - 1;
    document.getElementById("_matches").innerHTML = matches;
    document.getElementById("_storageSpace").innerHTML = storageSpace;
    }
    function addMatchboxes()
    {
    matchboxes++;
    storageSpace = storageSpace - 1;
    document.getElementById("_matchboxes").innerHTML = matchboxes;
    document.getElementById("storageMatchboxes").innerHTML = matchboxes;
    document.getElementById("_storageSpace").innerHTML = storageSpace;
    }

////////Function Hire Workers////////////

var wMatchboxes = new Object();
    wMatchboxes.count = 0;
    wMatchboxes.price = 100;
    wMatchboxes.sallary = 150;

    document.getElementById("staff").innerHTML = allStaff;
    document.getElementById("_wMatchboxes").innerHTML = wMatchboxes.count;

        function hirewMatchboxes()
{
    if(money > wMatchboxes.price)
    {
        wMatchboxes.count++;
        allStaff++;
        money = money - wMatchboxes.price;
        outcome = outcome + wMatchboxes.sallary / 60;

    document.getElementById("staff").innerHTML = allStaff;
    document.getElementById("_wMatchboxes").innerHTML = wMatchboxes.count;
    document.getElementById('money').innerHTML = money;  
    document.getElementById('staff').innerHTML = allStaff;

    }
}

function assignwMachtboxes()
{
    if(wMatchboxes.count > 0)
    {
        
    }
}

//Zappo///////////////////////////////////////////////////////////////////////////////////////

var wick = 0;
var flintSteel = 0;
var flint = 0;
var rayonBalls = 0;
var spring = 0;
var feltpad = 0;
var screw = 0;
var zappo = 0;

function craftZappo()
    {
        if(wick > 0 && flintSteel > 0 && flint > 0 && rayonBalls > 0 && spring > 0 && feltpad > 0 && screw > 0)
        {
            zappo++;
            wick--;
            flintSteel--;
            flint--;
            rayonBalls--;
            spring--;
            feltpad--;
            screw--;
            storageSpace--;
        }
        document.getElementById(_wick).innerHTML = wick;
        document.getElementById(_flintsteel).innerHTML = flintSteel;
        document.getElementById(_flint).innerHTML = flint;
        document.getElementById(_rayonBalls).innerHTML = rayonBalls;
        document.getElementById(_spring).innerHTML = spring;
        document.getElementById(_feltpad).innerHTML = feltpad;
        document.getElementById(_screw).innerHTML = screw;
        document.getElementById(_storageSpace).innerHTML = storageSpace;
        document.getElementById(_zappo).innerHTML = zappo;

    }

///car////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*var car = {
        accelerator = 0,
        airConditioning = 0,
        airFilters = 0,
        automaticTransmission = 0,
        automaticTransmissonFluid = 0,
        axle = 0,                                    
        battery = 0,                  
        brakes = 0,   
        brakeFluid = 0,       
        bumper = 0,              
        cabinAirFilter = 0,                  
        carRadio = 0,                  
        catalyticConvertor = 0,      
        chassis = 0,  
        choke = 0,               
        crankcase = 0,    
        crankShaft = 0,       
        cruiseControlSystem = 0,    
        cylinder = 0,                                                                      
        discBrake = 0,                           
        distributorCable = 0,                   
        distributorHead = 0,                 
        door = 0,                                     
        belt = 0,                             
        driveShaft = 0,                                                   
        engine = 0,                            
        engineBlock = 0,                       
        oilFilter = 0,                 
        exhaust = 0,   
        fan = 0,            
        firstGear = 0,                 
        fogLamp = 0,    
        floorMat = 0,                 
        fuelFilter = 0,  
        fuelGauge = 0,   
        fuelTank = 0,      
        fuse = 0,                 
        gearbox = 0,       
        gearLever = 0,     
        gloveCompartment = 0,     
        grill = 0,     
        handbrake = 0,                        
        headlight = 0,            
        heating = 0,                      
        hood = 0,                                     
        horn = 0,                                      
        hubcap = 0,                               
        ignition = 0,                                
        indicator = 0,                           
        insideMirror = 0,                    
        jumpLeads = 0,    
        licensePlate = 0,                        
        manualTransmission = 0,         
        numberPlate = 0,                     
        oilFilter = 0,  
        oxygenSensor = 0,  
        pedal = 0,            
        petrolCap = 0,                  
        petrolTank = 0,                          
        piston = 0,                                    
        powerSteering = 0,            
        powerSteeringFluid = 0,   
        radiator = 0,          
        rearLight = 0,                              
        rearViewMirror = 0,               
        reversingLight = 0,                   
        rollbar = 0,                               
        seat = 0,                                                  
        shockAbsorbers = 0,       
        silencer = 0,                             
        sparePart = 0,                           
        spareWheel = 0,                       
        sparkPlugs = 0,  
        speedometer = 0,                     
        starterMotor = 0,                  
        steeringColumn = 0,              
        steeringLock = 0,                       
        steeringWheel = 0,                
        sunroof = 0,                               
        suspension = 0,   
        taillights = 0,       
        tire = 0,  
        valve = 0,                                   
        waterPump = 0,       
        wheel = 0,               
        windscreen = 0,                      
        wiper = 0,  
        wingMirror = 0,        
        wiring = 0,
};

function craftCar()
{
    if
        (
            car.accelerator >0 &&
            car.airConditioning >0 &&
            car.airFilters >0 &&
            car.automaticTransmission >0 &&
            car.automaticTransmissonFluid >0 &&
            car.axle >0 &&                                    
            car.battery >0 &&                  
            car.brakes >0 &&   
            car.brakeFluid >0 &&       
            car.bumper >0 &&              
            car.cabinAirFilter >0 &&                  
            car.carRadio >0 &&                  
            car.catalyticConvertor >0 &&      
            car.chassis >0 &&  
            car.choke >0 &&               
            car.crankcase >0 &&    
            car.crankShaft >0 &&       
            car.cruiseControlSystem >0 &&    
            car.cylinder >0 &&                                                                      
            car.discBrake >0 &&                           
            car.distributorCable >0 &&                   
            car.distributorHead >0 &&                 
            car.door >0 &&                                     
            car.belt >0 &&                             
            car.driveShaft >0 &&                                                   
            car.engine >0 &&                            
            car.engineBlock >0 &&                       
            car.oilFilter >0 &&                 
            car.exhaust >0 &&   
            car.fan >0 &&            
            car.firstGear >0 &&                 
            car.fogLamp >0 &&    
            car.floorMat >0 &&                 
            car.fuelFilter >0 &&  
            car.fuelGauge >0 &&   
            car.fuelTank >0 &&      
            car.fuse >0 &&                 
            car.gearbox >0 &&       
            car.gearLever >0 &&     
            car.gloveCompartment >0 &&     
            car.grill >0 &&     
            car.handbrake >0 &&                        
            car.headlight >0 &&            
            car.heating >0 &&                      
            car.hood >0 &&                                     
            car.horn >0 &&                                      
            car.hubcap >0 &&                               
            car.ignition >0 &&                                
            car.indicator >0 &&                           
            car.insideMirror >0 &&                    
            car.jumpLeads >0 &&    
            car.licensePlate >0 &&                        
            car.manualTransmission >0 &&         
            car.numberPlate >0 &&                     
            car.oilFilter >0 &&  
            car.oxygenSensor >0 &&  
            car.pedal >0 &&            
            car.petrolCap >0 &&                  
            car.petrolTank >0 &&                          
            car.piston >0 &&                                    
            car.powerSteering >0 &&            
            car.powerSteeringFluid >0 &&   
            car.radiator >0 &&          
            car.rearLight >0 &&                              
            car.rearViewMirror >0 &&               
            car.reversingLight >0 &&                   
            car.rollbar >0 &&                               
            car.seat >0 &&                                                  
            car.shockAbsorbers >0 &&       
            car.silencer >0 &&                             
            car.sparePart >0 &&                           
            car.spareWheel >0 &&                       
            car.sparkPlugs >0 &&  
            car.speedometer >0 &&                     
            car.starterMotor >0 &&                  
            car.steeringColumn >0 &&              
            car.steeringLock >0 &&                       
            car.steeringWheel >0 &&                
            car.sunroof >0 &&                               
            car.suspension >0 &&   
            car.taillights >0 &&       
            car.tire >0 &&  
            car.valve >0 &&                                   
            car.waterPump >0 &&       
            car.wheel >0 &&               
            car.windscreen >0 &&                      
            car.wiper >0 &&  
            car.wingMirror >0 &&        
            car.wiring >0 &&
        ) 
    {
    car++;
    storageSpace--;
    car.accelerator --;
    car.airConditioning --;
    car.airFilters --;
    car.automaticTransmission --;
    car.automaticTransmissonFluid --;
    car.axle --;                                    
    car.battery --;                  
    car.brakes --;   
    car.brakeFluid --;       
    car.bumper --;              
    car.cabinAirFilter --;                  
    car.carRadio --;                  
    car.catalyticConvertor --;      
    car.chassis --;  
    car.choke --;               
    car.crankcase --;    
    car.crankShaft --;       
    car.cruiseControlSystem --;    
    car.cylinder --;                                                                      
    car.discBrake --;                           
    car.distributorCable --;                   
    car.distributorHead --;                 
    car.door --;                                     
    car.belt --;                             
    car.driveShaft --;                                                   
    car.engine --;                            
    car.engineBlock --;                       
    car.oilFilter --;                 
    car.exhaust --;   
    car.fan --;            
    car.firstGear --;                 
    car.fogLamp --;    
    car.floorMat --;                 
    car.fuelFilter --;  
    car.fuelGauge --;   
    car.fuelTank --;      
    car.fuse --;                 
    car.gearbox --;       
    car.gearLever --;     
    car.gloveCompartment --;     
    car.grill --;     
    car.handbrake --;                        
    car.headlight --;            
    car.heating --;                      
    car.hood --;                                     
    car.horn --;                                      
    car.hubcap --;                               
    car.ignition --;                                
    car.indicator --;                           
    car.insideMirror --;                    
    car.jumpLeads --;    
    car.licensePlate --;                        
    car.manualTransmission --;         
    car.numberPlate --;                     
    car.oilFilter --;  
    car.oxygenSensor --;  
    car.pedal --;            
    car.petrolCap --;                  
    car.petrolTank --;                          
    car.piston --;                                    
    car.powerSteering --;            
    car.powerSteeringFluid --;   
    car.radiator --;          
    car.rearLight --;                              
    car.rearViewMirror --;               
    car.reversingLight --;                   
    car.rollbar --;                               
    car.seat --;                                                  
    car.shockAbsorbers --;       
    car.silencer --;                             
    car.sparePart --;                           
    car.spareWheel --;                       
    car.sparkPlugs --;  
    car.speedometer --;                     
    car.starterMotor --;                  
    car.steeringColumn --;              
    car.steeringLock --;                       
    car.steeringWheel --;                
    car.sunroof --;                               
    car.suspension --;   
    car.taillights --;       
    car.tire --;  
    car.valve --;                                   
    car.waterPump --;       
    car.wheel --;               
    car.windscreen --;                      
    car.wiper --;  
    car.wingMirror --;        
    car.wiring --;

        document.getElementById(_"accelerator").innerHTML = accelerator;
        document.getElementById(_"airConditioning").innerHTML = airConditioning;
        document.getElementById(_"airFilters").innerHTML = airFilters;
        document.getElementById(_"automaticTransmission").innerHTML = airFilters;
        document.getElementById(_"automaticTransmissonFluid").innerHTML = automaticTransmissonFluid;
        document.getElementById(_"axle").innerHTML = axle;                                    
        document.getElementById(_"battery").innerHTML = battery;                 
        document.getElementById(_"brakes").innerHTML = brakes;   
        document.getElementById(_"brakeFluid").innerHTML = brakeFluid;      
        document.getElementById(_"bumper").innerHTML = bumper;             
        document.getElementById(_"cabinAirFilter").innerHTML = cabinAirFilter;                 
        document.getElementById(_"carRadio").innerHTML = carRadio;                 
        document.getElementById(_"catalyticConvertor").innerHTML = catalyticConvertor;      
        document.getElementById(_"chassis").innerHTML = chassis;
        document.getElementById(_"choke").innerHTML = choke;               
        document.getElementById(_"crankcase").innerHTML = crankcase;    
        document.getElementById(_"crankShaft").innerHTML = crankShaft;      
        document.getElementById(_"cruiseControlSystem").innerHTML = cruiseControlSystem;   
        document.getElementById(_"cylinder").innerHTML = cylinder;                                                                      
        document.getElementById(_"discBrake").innerHTML = discBrake;                          
        document.getElementById(_"distributorCable").innerHTML = distributorCable;                  
        document.getElementById(_"distributorHead").innerHTML = distributorHead;                
        document.getElementById(_"door").innerHTML = door;                                    
        document.getElementById(_"belt").innerHTML = belt;                            
        document.getElementById(_"driveShaft").innerHTML = driveShaft;                                                  
        document.getElementById(_"engine").innerHTML = engine;                           
        document.getElementById(_"engineBlock").innerHTML = engineBlock;                      
        document.getElementById(_"oilFilter").innerHTML = oilFilter;                
        document.getElementById(_"exhaust").innerHTML = exhaust;  
        document.getElementById(_"fan").innerHTML = fan;            
        document.getElementById(_"firstGear").innerHTML = firstGear;                
        document.getElementById(_"fogLamp").innerHTML = fogLamp;   
        document.getElementById(_"floorMat").innerHTML = floorMat;                
        document.getElementById(_"fuelFilter").innerHTML = fuelFilter; 
        document.getElementById(_"fuelGauge").innerHTML = fuelGauge;  
        document.getElementById(_"fuelTank").innerHTML = fuelTank;     
        document.getElementById(_"fuse").innerHTML = fuse;                
        document.getElementById(_"gearbox").innerHTML = gearbox;      
        document.getElementById(_"gearLever").innerHTML = gearLever;    
        document.getElementById(_"gloveCompartment").innerHTML = gloveCompartment;    
        document.getElementById(_"grill").innerHTML = grill;     
        document.getElementById(_"handbrake").innerHTML = handbrake;                       
        document.getElementById(_"headlight").innerHTML = headlight;           
        document.getElementById(_"heating").innerHTML = heating;                     
        document.getElementById(_"hood").innerHTML = hood;                                    
        document.getElementById(_"horn").innerHTML = horn;                                     
        document.getElementById(_"hubcap").innerHTML = hubcap;                               
        document.getElementById(_"ignition").innerHTML = ignition;                               
        document.getElementById(_"indicator").innerHTML = indicator;                          
        document.getElementById(_"insideMirror").innerHTML = insideMirror;                   
        document.getElementById(_"jumpLeads").innerHTML = jumpLeads;   
        document.getElementById(_"licensePlate").innerHTML = licensePlate;                       
        document.getElementById(_"manualTransmission").innerHTML = manualTransmission;        
        document.getElementById(_"numberPlate").innerHTML = numberPlate;                    
        document.getElementById(_"oilFilter").innerHTML = oilFilter; 
        document.getElementById(_"oxygenSensor").innerHTML = oxygenSensor; 
        document.getElementById(_"pedal").innerHTML = pedal;           
        document.getElementById(_"petrolCap").innerHTML = petrolCap;                 
        document.getElementById(_"petrolTank").innerHTML = petrolTank;                        
        document.getElementById(_"piston").innerHTML = piston;                                   
        document.getElementById(_"powerSteering").innerHTML = powerSteering;           
        document.getElementById(_"powerSteeringFluid").innerHTML =   
        document.getElementById(_"radiator").innerHTML = radiator;         
        document.getElementById(_"rearLight").innerHTML = rearLight;                             
        document.getElementById(_"rearViewMirror").innerHTML = rearViewMirror               
        document.getElementById(_"reversingLight").innerHTML = reversingLight;                  
        document.getElementById(_"rollbar").innerHTML = rollbar;                              
        document.getElementById(_"seat").innerHTML = seat;                                                 
        document.getElementById(_"shockAbsorbers").innerHTML = shockAbsorbers;      
        document.getElementById(_"silencer").innerHTML = silencer;                            
        document.getElementById(_"sparePart").innerHTML = sparePart;                          
        document.getElementById(_"spareWheel").innerHTML = spareWheel;                      
        document.getElementById(_"sparkPlugs").innerHTML = sparkPlugs; 
        document.getElementById(_"speedometer").innerHTML = speedometer;                    
        document.getElementById(_"starterMotor").innerHTML = starterMotor;                 
        document.getElementById(_"steeringColumn").innerHTML = steeringColumn;             
        document.getElementById(_"steeringLock").innerHTML = steeringLock;                      
        document.getElementById(_"steeringWheel").innerHTML =                
        document.getElementById(_"sunroof").innerHTML =                               
        document.getElementById(_"suspension").innerHTML =   
        document.getElementById(_"taillights").innerHTML =       
        document.getElementById(_"tire").innerHTML =  
        document.getElementById(_"valve").innerHTML =                                   
        document.getElementById(_"waterPump").innerHTML =       
        document.getElementById(_"wheel").innerHTML =               
        document.getElementById(_"windscreen").innerHTML =                      
        document.getElementById(_"wiper").innerHTML =  
        document.getElementById(_"wingMirror").innerHTML =        
        document.getElementById(_"wiring").innerHTML =
    };
}  */                
                               
//Level Text///////////////////

var text1 = "";

//Mitarbeiter////////////////
    
/////amateur clicker///////////////////////////////////////////////////////////

var amateurClicker1 = new Object();
    amateurClicker1.name   = 'Asim Conway';
    amateurClicker1.clickRate = 5;
    amateurClicker1.sallary = 180;
    amateurClicker1.hiringCost = 250;

    document.getElementById('ac1Name').innerHTML = amateurClicker1.name; 
    document.getElementById('ac1ClickRate').innerHTML = amateurClicker1.clickRate;  
    document.getElementById('ac1Sallary').innerHTML = amateurClicker1.sallary;
    document.getElementById('ac1HiringCost').innerHTML = amateurClicker1.hiringCost;
    document.getElementById('staff').innerHTML = allStaff;


function hireAmateurClicker1() 
{
    if(money >= amateurClicker1.hiringCost)
        {                                  
        income = income + amateurClicker1.clickRate;                                   
        money = money - amateurClicker1.hiringCost;
        outcome = outcome + amateurClicker1.sallary / 60; 
        allStaff = allStaff + 1;
        document.getElementById('income').innerHTML = income; 
        document.getElementById('money').innerHTML = money;  
        document.getElementById('staff').innerHTML = allStaff;
        };
}

var amateurClicker2 = new Object();
    amateurClicker2.name   = 'Vigil Hussain';
    amateurClicker2.clickRate = 8;
    amateurClicker2.sallary = 200;
    amateurClicker2.hiringCost = 500;

    document.getElementById('ac2Name').innerHTML = amateurClicker2.name; 
    document.getElementById('ac2ClickRate').innerHTML = amateurClicker2.clickRate;  
    document.getElementById('ac2Sallary').innerHTML = amateurClicker2.sallary;
    document.getElementById('ac2HiringCost').innerHTML = amateurClicker2.hiringCost;
    document.getElementById('staff').innerHTML = allStaff;


function hireAmateurClicker2() 
{
    if(money >= amateurClicker2.hiringCost)
    {                                  
        income = income + amateurClicker2.clickRate;                                   
        money = money - amateurClicker2.hiringCost;
        outcome = outcome + amateurClicker2.sallary / 60; 
        allStaff = allStaff + 1;
        document.getElementById('income').innerHTML = income; 
        document.getElementById('money').innerHTML = money;  
        document.getElementById('staff').innerHTML = allStaff;
    };
}

var amateurClicker3 = new Object();
    amateurClicker3.name   = 'Alice Glen';
    amateurClicker3.clickRate = 6;
    amateurClicker3.sallary = 150;
    amateurClicker3.hiringCost = 900;

    document.getElementById('ac3Name').innerHTML = amateurClicker3.name; 
    document.getElementById('ac3ClickRate').innerHTML = amateurClicker3.clickRate;  
    document.getElementById('ac3Sallary').innerHTML = amateurClicker3.sallary;
    document.getElementById('ac3HiringCost').innerHTML = amateurClicker3.hiringCost;
    document.getElementById('staff').innerHTML = allStaff;


function hireAmateurClicker3() 
{
    if(money >= amateurClicker3.hiringCost)
    {                                  
        income = income + amateurClicker3.clickRate;                                   
        money = money - amateurClicker3.hiringCost;
        outcome = outcome + amateurClicker3.sallary / 60; 
        allStaff = allStaff + 1;
        document.getElementById('income').innerHTML = income; 
        document.getElementById('money').innerHTML = money;  
        document.getElementById('staff').innerHTML = allStaff;
    };
}
/////trainee clicker///////////////////////////////////////////////////////////

var traineeClicker1 = new Object();
    traineeClicker1.name   = 'Macy Stamp';
    traineeClicker1.clickRate = 50;
    traineeClicker1.sallary = 150;
    traineeClicker1.hiringCost = 1500;

    document.getElementById('tc1Name').innerHTML = traineeClicker1.name; 
    document.getElementById('tc1ClickRate').innerHTML = traineeClicker1.clickRate;  
    document.getElementById('tc1Sallary').innerHTML = traineeClicker1.sallary;
    document.getElementById('tc1HiringCost').innerHTML = traineeClicker1.hiringCost;
    document.getElementById('staff').innerHTML = allStaff;


function hireTraineeClicker1() 
{
    if(money >= traineeClicker1.hiringCost)
    {                                  
        income = income + traineeClicker1.clickRate;                                   
        money = money - traineeClicker1.hiringCost;
        outcome = outcome + traineeClicker1.sallary / 60; 
        allStaff = allStaff + 1;
        document.getElementById('income').innerHTML = income; 
        document.getElementById('money').innerHTML = money;  
        document.getElementById('staff').innerHTML = allStaff;
    };
}

var traineeClicker2 = new Object();
    traineeClicker2.name   = 'Landon Orozco';
    traineeClicker2.clickRate = 45;
    traineeClicker2.sallary = 150;
    traineeClicker2.hiringCost = 1300;

    document.getElementById('tc2Name').innerHTML = traineeClicker2.name; 
    document.getElementById('tc2ClickRate').innerHTML = traineeClicker2.clickRate;  
    document.getElementById('tc2Sallary').innerHTML = traineeClicker2.sallary;
    document.getElementById('tc2HiringCost').innerHTML = traineeClicker2.hiringCost;
    document.getElementById('staff').innerHTML = allStaff;


function hireTraineeClicker2() 
{
    if(money >= traineeClicker2.hiringCost)
    {                                  
        income = income + traineeClicker2.clickRate;                                   
        money = money - traineeClicker2.hiringCost;
        outcome = outcome + traineeClicker2.sallary / 60; 
        allStaff = allStaff + 1;
        document.getElementById('income').innerHTML = income; 
        document.getElementById('money').innerHTML = money;  
        document.getElementById('staff').innerHTML = allStaff;
    };
}

var traineeClicker3 = new Object();
    traineeClicker3.name   = 'Leslie Stevens';
    traineeClicker3.clickRate = 55;
    traineeClicker3.sallary = 150;
    traineeClicker3.hiringCost = 2200;

    document.getElementById('tc3Name').innerHTML = traineeClicker3.name; 
    document.getElementById('tc3ClickRate').innerHTML = traineeClicker3.clickRate;  
    document.getElementById('tc3Sallary').innerHTML = traineeClicker3.sallary;
    document.getElementById('tc3HiringCost').innerHTML = traineeClicker3.hiringCost;
    document.getElementById('staff').innerHTML = allStaff;


function hireTraineeClicker3() 
{
    if(money >= traineeClicker3.hiringCost)
    {                                  
        income = income + traineeClicker3.clickRate;                                   
        money = money - traineeClicker3.hiringCost;
        outcome = outcome + traineeClicker3.sallary / 60; 
        allStaff = allStaff + 1;
        document.getElementById('income').innerHTML = income; 
        document.getElementById('money').innerHTML = money;  
        document.getElementById('staff').innerHTML = allStaff;
    };
}
    //prof clicker/////////////

var proClicker1 = new Object();
    proClicker1.name   = 'Jason Lara';
    proClicker1.clickRate = 250;
    proClicker1.sallary = 5000;
    proClicker1.hiringCost = 20000;

    document.getElementById('pc1Name').innerHTML = proClicker1.name; 
    document.getElementById('pc1ClickRate').innerHTML = proClicker1.clickRate;  
    document.getElementById('pc1Sallary').innerHTML = proClicker1.sallary;
    document.getElementById('pc1HiringCost').innerHTML = proClicker1.hiringCost;
    document.getElementById('staff').innerHTML = allStaff;

function hireProClicker1() 
{
    if(money >= proClicker1.hiringCost)
    {                                  
        income = income + proClicker1.clickRate;                                   
        money = money - proClicker1.hiringCost;
        outcome = outcome + proClicker1.sallary / 60; 
        allStaff = allStaff + 1;

        document.getElementById('income').innerHTML = income; 
        document.getElementById('money').innerHTML = money;  
        document.getElementById('staff').innerHTML = allStaff;
    };
}

var proClicker2 = new Object();
    proClicker2.name   = 'Michael Mckee';
    proClicker2.clickRate = 220;
    proClicker2.sallary = 4800;
    proClicker2.hiringCost = 18750;

    document.getElementById('pc2Name').innerHTML = proClicker2.name; 
    document.getElementById('pc2ClickRate').innerHTML = proClicker2.clickRate;  
    document.getElementById('pc2Sallary').innerHTML = proClicker2.sallary;
    document.getElementById('pc2HiringCost').innerHTML = proClicker2.hiringCost;
    document.getElementById('staff').innerHTML = allStaff;

function hireProClicker2() 
{
    if(money >= proClicker2.hiringCost)
    {                                  
        income = income + proClicker2.clickRate;                                   
        money = money - proClicker2.hiringCost;
        outcome = outcome + proClicker2.sallary / 60; 
        allStaff = allStaff + 1;

        document.getElementById('income').innerHTML = income; 
        document.getElementById('money').innerHTML = money;  
        document.getElementById('staff').innerHTML = allStaff;
    };
}

var proClicker3 = new Object();
    proClicker3.name   = 'David Nixon';
    proClicker3.clickRate = 300;
    proClicker3.sallary = 9000;
    proClicker3.hiringCost = 26000;

    document.getElementById('pc3Name').innerHTML = proClicker3.name; 
    document.getElementById('pc3ClickRate').innerHTML = proClicker3.clickRate;  
    document.getElementById('pc3Sallary').innerHTML = proClicker3.sallary;
    document.getElementById('pc3HiringCost').innerHTML = proClicker3.hiringCost;
    document.getElementById('staff').innerHTML = allStaff;

function hireProClicker3() 
{
    if(money >= proClicker3.hiringCost)
    {                                  
        income = income + proClicker3.clickRate;                                   
        money = money - proClicker3.hiringCost;
        outcome = outcome + proClicker3.sallary / 60; 
        allStaff = allStaff + 1;

        document.getElementById('income').innerHTML = income; 
        document.getElementById('money').innerHTML = money;  
        document.getElementById('staff').innerHTML = allStaff;
    };
}

var proClicker4 = new Object();
    proClicker4.name   = 'Jason Lara';
    proClicker4.clickRate = 400;
    proClicker4.sallary = 12000;
    proClicker4.hiringCost = 40000;

    document.getElementById('pc4Name').innerHTML = proClicker4.name; 
    document.getElementById('pc4ClickRate').innerHTML = proClicker4.clickRate;  
    document.getElementById('pc4Sallary').innerHTML = proClicker4.sallary;
    document.getElementById('pc4HiringCost').innerHTML = proClicker4.hiringCost;
    document.getElementById('staff').innerHTML = allStaff;

function hireProClicker4() 
{
    if(money >= proClicker4.hiringCost)
    {                                  
        income = income + proClicker4.clickRate;                                   
        money = money - proClicker4.hiringCost;
        outcome = outcome + proClicker4.sallary / 60; 
        allStaff = allStaff + 1;

        document.getElementById('income').innerHTML = income; 
        document.getElementById('money').innerHTML = money;  
        document.getElementById('staff').innerHTML = allStaff;
    };
}

///Manager///////////////////////////////////////////////////////////


//CLICK BUTTON///////////////////////////////////////////////////////

function clickMoney(income) {
	money = money + 1;
	document.getElementById("money").innerHTML = money.toFixed(2);
}

//CALCULATING MONEY//////////////////////////////////////////////////

function calcMoney() {
	money = money + income;
    money = money - outcome;

	document.getElementById("money").innerHTML = money.toFixed(2);
	document.getElementById("actualIncome").innerHTML = income.toFixed(2);
    document.getElementById("actualOutcome").innerHTML = outcome.toFixed(2);
}

//INCREMENT INCOME /////////////////////////////////////////////////

function incrementIncome() 
{
	income = income + income;

	document.getElementById("income").innerHTML = income.toFixed(2);
}

function showactualIncome()
{
    document.getElementById("actualIncome").innerHTML = income.toFixed(2);
}

function showactualOutcome()
{
    document.getElementById("actualOutcome").innerHTML = outcome.toFixed(2);
}

//BUY A CLICKER/////////////////////////////////////////////////////

function buyAclicker()
{
    var cost = Math.floor(10 * Math.pow(1.1.innerHTMLincome));     //works out the cost of this cursor
    if(money >= cost)
    {                                   
        income = income + 1;                                  
    	money = money - cost; 
        clicker = clicker + 1;
        allStaff = allStaff + 1;
        document.getElementById("clickerButton").innerHTML = clicker;                         //removes the cookies spent
        document.getElementById('actualIncome').innerHTML = income;  //updates the number of cursors for the user
        document.getElementById('money').innerHTML = money;  //updates the number of cookies for the user
        document.getElementById('staff').innerHTML = allStaff;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,income));       //works out the cost of the next cursor
    document.getElementById('cost').innerHTML = nextCost;  //updates the cursor cost for the user
};

function hideField() 
{
    
        document.getElementById("feld").style.display = "none";
        document.getElementById("nameButton").style.display = "none";
        document.getElementById("nameHint").style.display = "none";
};

function levelText ()
{
    if (money > 0 && money < 100) 
    {
        document.getElementById("level").innerHTML = ' 1';
        
    }

    if (money > 100 && money < 200) 
    {
        document.getElementById("level").innerHTML = ' 2';
        
    }

    if (money > 200 && money < 500) 
    {
        document.getElementById("level").innerHTML = ' 3';
        
    }

    if (money > 500 && money < 1000) 
    {
        document.getElementById("level").innerHTML = ' 4';
        
    }

    if (money > 1000 && money < 5000) 
    {
        document.getElementById("level").innerHTML = ' 5';
        
    }
};






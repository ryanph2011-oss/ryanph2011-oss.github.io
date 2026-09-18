$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    //create platforms
    //createPlatform(x,y,width,height)
    createPlatform(150, 150, 100, 10);
    createPlatform(550, 450, 100, 10);
    createPlatform(150, 650, 100, 10);
    createPlatform(350, 550, 100, 10);
    createPlatform(750, 350, 100, 10);
    createPlatform(550, 250, 100, 10);
    createPlatform(350, 200, 100, 10);
    createPlatform(700, 450, 100, 10);

    // TODO 3 - Create Collectables
  createCollectable("steve", 1350, 50);
createCollectable("diamond", 200, 170, 0.5, 0.7);
  

    // TODO 4 - Create Cannons
    createCannon("left", 250, 2000);
    createCannon("right", 450, 2000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

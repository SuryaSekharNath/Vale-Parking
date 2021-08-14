canvas = document.getElementById('my_Canvas');
ctx = canvas.getContext("2d");

greencar = "car2.png";
greencar_width = 75;
greencar_height = 100;
greencar_x = 5;
greencar_y = 225;

function add() 
{
    greencar_imgTab = new Image();
    greencar_imgTab.onload = uploadgreencar;
    greencar_imgTab.src = greencar_image;
}

function uploadgreencar()
{
    ctx.drawImage(greencar, greencar_x, greencar_y, greencar_width, greencar_height);
}

function up()
{
    if(greencar_y >=0)
    {
        greencar_y = greencar_y - 10;
        console.log("When up arrow is pressed, x = " + greencar_x + " | y =" + greencar_y);
        uploadgreencar()
    }
}
function down()
{
    if(greencar_y <=600)
    {
        greencar_y = greencar_y + 10;
        console.log("When down arrow is pressed, x = " + greencar_x + " | y =" + greencar_y);
        uploadgreencar()
    }
}
function right()
{
    if(greencar_x >=0)
    {
        greencar_x = greencar_x - 10;
        console.log("When right arrow is pressed, x = " + greencar_x + " | y =" + greencar_y);
        uploadgreencar()
    }
}
function left()
{
    if(greencar_x <=1500)
    {
        greencar_x = greencar_x + 10;
        console.log("When up arrow is pressed, x = " + greencar_x + " | y =" + greencar_y);
        uploadgreencar()
    }
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
      if(keyPressed == '38')
      {
          up()
          console.log("up");
      }
      if(keyPressed == '39')
      {
          down()
          console.log("down");
      }
      if(keyPressed == '40')
      {
          right()
          console.log("right");
      }
      if(keyPressed == '41')
      {
          left()
          console.log("left");
      }
}
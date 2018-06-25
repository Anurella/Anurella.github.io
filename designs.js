// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()


function makeGrid() {

    // Your code goes here!
    //get the number of rows from GridHeight
    const makerRows = $('#inputHeight').val();
    const makerCols = $('#inputWeight').val();
    const table = $('#pixelCanvas');
    let i, j, row;
    // use  a nested for loop
    table.children().remove();
    for (i = 1; i <= makerRows; i++) {
        //create a roww
        //negating the insert row method simply lets it start from the bottom
        //create row as a child

        table.append("<tr>");
        for (j = 1; j <= makerCols; j++) {
            //append the cols
            table.children().last().append('<td class="tblCell"> </td>');
        }

    }

    //when a grid is selected change the background color.
    $('.tblCell').click(function() {

      let currentColor, hexColor;
       const color = $('#colorPicker').val();
        currentColor =  $(this).css('background-color');
        currentColor = rgb2Arr(currentColor);
        hexColor = rgb2Hex(currentColor[0],currentColor[1],currentColor[2]);
        //ternary condition
       (hexColor !== color) ? $(this).css('background-color', color) : $(this).css('background-color', "#ffffff");
    })

};



//call the make grid function when the button is clicked.
$('#sizePicker').submit(function(event) {
    //call makeGrid
    event.preventDefault();
    makeGrid();
});


//splits an rgb value into an array. (r,g,b) -> [r,g,b]
function rgb2Arr(string){
  var a = string.split("(")[1].split(")")[0];
  a = a.split(",");
  return a;
};

function byte2Hex(n)
{
  var nybHexString = "0123456789abcdef";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

function rgb2Hex(r,g,b)
{
  return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
}






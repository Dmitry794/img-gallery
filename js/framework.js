var createGalley = function (document) {
    console.log('creating gallery...');

    var desks = document.getElementsByClassName('desk');
    for (var i = 0; i < desks.length; i++) {
        var desk = desks[i];
        var c_size = desk.getAttribute('column_size');
        var r_size = desk.getAttribute('raw_size');
        var width = desk.offsetWidth;
        var height = desk.offsetHeight;
        var x_delta = 10 * (c_size + 1);
        var y_delta = 10 * (r_size + 1);

        var padd = parseInt(window.getComputedStyle(desk).padding);

        var container_width = (width - 2 * padd) / c_size;
        var container_height = (height - 2 * padd) / r_size;
        console.log(container_width + "x" + container_height);

        var table = document.createElement('table');
        for (var ti = 0; ti < r_size; ti++) {
            var tr = document.createElement('tr');
            tr.setAttribute('style', 'height:' + container_height + 'px');
            for (var di = 0; di < c_size; di++) {
                var td = document.createElement('td');
                td.setAttribute('style', 'width:' + container_width + 'px');
                var div = document.createElement('div');

                var x = container_width - 40;
                var y = container_height - 40;
                div.setAttribute('class', 'container');
                div.setAttribute('style', 'height: ' + y + 'px');
                // todo: insert image link
                div.onclick = function () {
                    //todo: add onclick handler
                };
                td.appendChild(div);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        desk.appendChild(table);
    }
    console.log('DONE!');
};
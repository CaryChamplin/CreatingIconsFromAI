#target Illustrator

if (app.documents.length > 0) {
    main();
}
else alert('Cancelled by user');

function main() {
    var document = app.activeDocument;
    var afile = document.fullName;
    var filename = afile.name.split('.')[0];

    var folder = afile.parent.selectDlg("Export as CSS Layers (images only)...");

    if(folder != null)
    {
        var activeABidx = document.artboards.getActiveArtboardIndex();
        var activeAB = document.artboards[activeABidx]; // get active AB
        var abBounds = activeAB.artboardRect;// left, top, right, bottom

        var docBounds = document.visibleBounds;
        activeAB.artboardRect = docBounds;

        var options = new ExportOptionsPNG24();
        options.antiAliasing = true;
        options.transparency = true;
        options.artBoardClipping = true;

        // iPhone and iPad icon families
        var icons = [
            {"name": "iphone-60@3x",         "size":180},
            {"name": "iphone-60@2x",         "size":120},
            {"name": "iphone-40@3x",         "size":120},
            {"name": "iphone-40@2x",         "size":80},
            {"name": "iphone-29@3x",         "size":87},
            {"name": "iphone-29@2x",         "size":58},
            {"name": "ipad-83.5@2x",         "size":167},
            {"name": "ipad-76@2x",           "size":152},
            {"name": "ipad-40@2x",           "size":80},
            {"name": "ipad-29@2x",           "size":58},
            {"name": "iTunesArtwork-512@2x", "size":1024}
        ];

        var icon, file;
        for(var i = 0; i < icons.length; i++)
        {
            icon = icons[i];

            file = new File(folder.fsName + '/' + icon.name + ".png");

            options.horizontalScale = 100 * (icon.size / document.width);
            options.verticalScale = 100 * (icon.size / document.height);

            document.exportFile(file,ExportType.PNG24,options);
        }

        activeAB.artboardRect = abBounds;
    }
}
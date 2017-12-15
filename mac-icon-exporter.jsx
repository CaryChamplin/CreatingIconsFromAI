//=============================================================================
// Illustrator script to create Mac OS icons from an AI file.
//-----------------------------------------------------------------------------
// Steps:
// 1) Save the file 'mac-icon-exporter.jsx' file to the following folder:
//    - default location for scripts within Illustrator
//    - following folder path assumes MacOS and Adobe Illustrator 2018
//    	/Applications/Adobe Illustrator CC 2018/Presets/en_US/Scripts/
//
// 2) With an AI file opened in Illustrator
//    -	select File > Scripts > mac-icon-exporter
//    - when prompted, select the destination folder for saving the icon files
//-----------------------------------------------------------------------------
// References:
//  Adobe Photoshop JavaScript Reference
//    http://www.adobe.com/devnet/illustrator/scripting.html
//  Apple Mac OS Human Interface Guidelines
//    https://developer.apple.com/macos/human-interface-guidelines/
//=============================================================================

if (app.documents.length > 0) {
    main();
}
else alert('Cancelled by user');

function main() {
    var document = app.activeDocument;
    var afile = document.fullName;
    var filename = afile.name.split('.')[0];

    // Prompt user to select output folder for icons. Clicking "Cancel" returns null.
    var folder = afile.parent.selectDlg("Select folder to export png icon files.");

    if(folder !== null)
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

        // mac os icon family
        var icons = [
          {"name": "AppStoreMac_1024",     "size":1024},

          {"name": "mac_16",                "size":16},
          {"name": "mac_16@2x",             "size":16*2},
          {"name": "mac_32",                "size":32},
          {"name": "mac_32@2x",             "size":32*2},
          {"name": "mac_128",               "size":128},
          {"name": "mac_128@2x",            "size":128*2},
          {"name": "mac_256",               "size":256},
          {"name": "mac_256@2x",            "size":256*2},
          {"name": "mac_512",               "size":512},
          {"name": "mac_512@2x",            "size":512*2}
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

        alert("Icons have been created and saved.");

    }
}
//=============================================================================
// Illustrator script to create iPhone and iPad icons from an AI file.
//-----------------------------------------------------------------------------
// Steps:
// 1) Save the file 'ios-icon-exporter.jsx' file to the following folder:
//    - default location for scripts within Illustrator
//    - following folder path assumes MacOS and Adobe Illustrator 2018
//    	/Applications/Adobe Illustrator CC 2018/Presets/en_US/Scripts/
//
// 2) With an AI file opened in Illustrator
//    -	select File > Scripts > ios-icon-exporter
//    - when prompted, select the destination folder for saving the icon files
//-----------------------------------------------------------------------------
// References:
//  Adobe Photoshop JavaScript Reference
//    http://www.adobe.com/devnet/illustrator/scripting.html
//    http://wwwimages.adobe.com/content/dam/acom/en/devnet/illustrator/pdf/Illustrator_JavaScript_Scripting_Reference_2017.pdf
//  Apple iOS Human Interface Guidelines
//    https://developer.apple.com/ios/human-interface-guidelines/
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

        // iPhone and iPad icon families
        var icons = [
          {"name": "AppStoreiOS_1024",     "size":1024},

          {"name": "iPad_20",              "size":20},
          {"name": "iPad_20@2x",           "size":20*2},
          {"name": "iPad_29",              "size":29},
          {"name": "iPad_29@2x",           "size":29*2},
          {"name": "iPad_40",              "size":40},
          {"name": "iPad_40@2x",           "size":40*2},
          {"name": "iPad_76",              "size":76},
          {"name": "iPad_76@2x",           "size":76*2},
          {"name": "iPad_83.5@2x",         "size":83.5*2},

          {"name": "iPhone_20@2x",         "size":20*2},
          {"name": "iPhone_20@3x",         "size":20*3},
          {"name": "iPhone_29@2x",         "size":29*2},
          {"name": "iPhone_29@3x",         "size":29*3},
          {"name": "iPhone_40@2x",         "size":40*2},
          {"name": "iPhone_40@3x",         "size":40*3},
          {"name": "iPhone_60@2x",         "size":60*2},
          {"name": "iPhone_60@3x",         "size":60*3}
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

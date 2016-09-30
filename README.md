# Creating iOS and Mac OS icon assets from Adobe Illustrator

According to Apple's [iOS Human Interface Guidelines](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/IconMatrix.html#//apple_ref/doc/uid/TP40006556-CH27-SW1) and [Mac OS Human Interface Guidelines](https://developer.apple.com/library/mac/documentation/UserExperience/Conceptual/OSXHIGuidelines/Gallery.html#//apple_ref/doc/uid/20000957-CH88-SW1), the following sets of icons are needed for devices supporting the current iOS and Mac OS versions, respectively:
![iOS and Mac OS app icon sizes](https://github.com/CaryChamplin/CreatingIconsFromAI/blob/master/icon-sizes-table.png)

[Adobe Illustrator](http://www.adobe.com/products/illustrator.html) (AI) was used for creating the icon designs for both iOS devices and Mac OS. AI creates artwork in vector format which is perfect for creating scaleable images that are pixelated only during the export step ('Save for Web' using png24 at each specific icon size). This capability permitted the use of a single artboard on AI for the design of an icon with a size of 1024x1024 pixels. Although asset generation is not built into AI, it is entirely possible to create a script that generates all the iPhone and iPad icons automagically from the single AI artboard and, similarly, with Mac OS icons.

###AI Scripts for Creating iOS and Mac OS App Icons
AI supports use of external script files (e.g., JavaScript) that can be executed on a particular AI document from within AI. Here are the details:

- Since app icons for iOS and Mac OS may be designed differently, I will assume that in the general case, there should be two scripts: one script for generating the iOS icon image assets and a second script for generating the Mac OS icon image assests.
- Scripts can be written in various scripting languages, but these two scripts are written in JavaScript.
- In my case with [AI](http://www.adobe.com/products/illustrator.html), I placed the two JavaScript files in the default folder: 'Applications/Adobe Illustrator CC 2015.3/Presets/en_US/Scripts/'. Actually, any folder location will do. If the two JavaScript files are placed in the default folder, then AI includes them in the script list automagically. As shown below, the 'File' drop-down menu script selection in AI shows both icon export JavaScript files.

![Pull-down menu for AI scripts](https://github.com/CaryChamplin/CreatingIconsFromAI/blob/master/ai_file-scripts.png)

The only difference in the JavaScript code between the iOS and Mac OS version is the short list of icon names and sizes. Both JavaScript files are short, simple, and easy to understand.

Read the [post](http://champlintechnologiesllc.com/illustrator-export-scripts-for-ios-and-mac-os-icons/) on [Champlin Technologies LLC](http://champlintechnologiesllc.com) for more info.

# Creating iOS and Mac OS icon assets from Adobe Illustrator

According to Apple's [iOS Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/) and [Mac OS Human Interface Guidelines](https://developer.apple.com/macos/human-interface-guidelines/), the following sets of icons are needed for products supporting the current and recent versions of iOS and Mac OS, respectively:
![iOS and Mac OS app icon sizes](https://github.com/CaryChamplin/CreatingIconsFromAI/blob/master/icon-sizes-table.png)

[Adobe Illustrator](http://www.adobe.com/products/illustrator.html) (AI) can be used for creating the icon designs for both iOS and Mac OS. AI creates artwork in vector format which is perfect for creating scaleable images that are pixelated only during the export step ('Save for Web' using png24 at each specific icon size). This capability permits the use of a single artboard on AI for the design of an icon with a size of at least 1024x1024 pixels. Although icon asset generation is not built into AI, it is entirely possible to create an [AI script](http://www.adobe.com/devnet/illustrator/scripting.html) that generates all the iPhone/iPad icons automagically from the single AI artboard and, similarly, Mac OS icons.

##AI Scripts for Creating iOS and Mac OS App Icons

AI supports use of external script files (e.g., JavaScript) that can be executed on a particular AI document from within AI. Here are the details:

- Since app icons for iOS and Mac OS will likely be designed differently, I have included two scripts: one script for generating the iOS icon image assets and a second script for generating the Mac OS icon image assets.
- Scripts can be written in various scripting languages, but these two scripts are written in JavaScript.
- In my case with [AI](http://www.adobe.com/products/illustrator.html), I placed both JavaScript files in the default script folder: '/Applications/Adobe Illustrator CC 2018/Presets/en_US/Scripts/'. Actually, any folder location will do. However, if the two JavaScript files are placed in the default script folder, then AI includes them in the script list automagically. As shown below, the 'File' drop-down menu script selection in AI shows both icon export JavaScript files.

![Pull-down menu for AI scripts](https://github.com/CaryChamplin/CreatingIconsFromAI/blob/master/ai_file-scripts.png)

The only difference in the JavaScript code between the iOS and Mac OS version is the short list of icon names and sizes. The JavaScript files are short, simple, and easy to understand.

##Open Issue: Edge Artifact on Downsampling

I am seeing an edge artifact (1 pixel wide along both top and left edges) that could be associated with the downsampling option. Here is an example (76x76 pixels). What's interesting is I don't see this artifact with my Photoshop icon scripts which, incidently, use bicubic downsampling. Just need to find a little time to resolve.

![1-pixel wide top and left edge artifact example](https://github.com/CaryChamplin/CreatingIconsFromAI/blob/master/iPad_76.png)





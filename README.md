# qrcoder
QRCode generator for VFP9 and VFP Advanced. Works with kodnet

## Usage

1. QRcoder for VFP works with kodnet (a library for use Microsoft .NET interop). Please first install [kodnet](https://github.com/FoxShell/kodnet)

2. Add [src/qrcoder.prg](./src/qrcoder.prg) to your project

3. Execute file at startup

```harbour 
do qrcoder.prg
```

4. It's ready. You can use with object ```_screen.qrcoder```



## Methods 

```typescript 

// Create a PNG Image QRCode, and returns the binary content as string
// you can use the string to save a file 
_screen.qrcoder.createPNG(content: string, correctionLevel?: "H" | "M" | "L" | "Q") : string 

// Create a PNG Image QRCode and save to file 
_screen.qrcoder.savePNG(content: string, file: string, correctionLevel?: "H" | "M" | "L" | "Q") : void


```

## Example

See example at [samples/generate.prg](./samples/generate.prg)
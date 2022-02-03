// script to copy the DLL Content to PRG
import fs from 'fs'
import Path from 'path'

export class Program{
	static async main(){
		let file = Path.join(__dirname, "QRCoder.dll")
		let prg = Path.join(__dirname, "src", "qrcoder.prg")
		let bytes= await fs.promises.readFile(file)
		let base64= bytes.toString('base64')

		let splits = []
		while(base64.length){
			splits.push(base64.substring(0, 160))
			base64 = base64.substring(160)
		}

		// now put in file 
		let content = await fs.promises.readFile(prg, "latin1")
		let pos = content.indexOf("*** QRCoder.dll (bytes content) ***")
		let previous = "\r\n\r\n"
		if(pos >= 0){
			previous = content.substring(0, pos)
		}

		let code = []
		code.push("*** QRCoder.dll (bytes content) ***")
		code.push("Function QRCoderContent()")
		code.push("Text to m.code noshow")
		code.push(...splits)
		code.push("EndText")
		code.push("return Strconv(m.code, 14)")
		code.push("EndFunc")
		code.push("*** QRCoder.dll (bytes content) ***")
		
		await fs.promises.writeFile(prg, Buffer.from(previous + code.join("\r\n"), "latin1"))

	}
}
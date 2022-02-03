* execute file
do ("../src/qrcoder.prg")

* now you can use the _screen.qrcoder 
* second parameter is correction level: H, M, L, Q 
content = _screen.qrcoder.createPNG("https://google.com", "H")

wait "Select a file to save PNG file" timeout 4
file = getfile(".png")
strtofile(m.content, m.file)
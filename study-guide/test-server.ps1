$html = Invoke-WebRequest -Uri 'http://localhost:3000/study-guide.html' -UseBasicParsing -TimeoutSec 10
Write-Output "Status: $($html.StatusCode)"
Write-Output "Length: $($html.Content.Length)"
Write-Output "Has print protection: $($html.Content.Contains('@media print'))"
Write-Output "Has Ctrl+P prevention: $($html.Content.Contains('keydown'))"

$home = Invoke-WebRequest -Uri 'http://localhost:3000/' -UseBasicParsing -TimeoutSec 10
Write-Output "Home status: $($home.StatusCode)"
Write-Output "Home length: $($home.Content.Length)"

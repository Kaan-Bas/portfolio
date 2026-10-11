# Creates the typographic social preview asset. Run from the project root on Windows.
Add-Type -AssemblyName System.Drawing
$image = New-Object System.Drawing.Bitmap(1200, 630)
$graphics = [System.Drawing.Graphics]::FromImage($image)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$paper = [System.Drawing.ColorTranslator]::FromHtml('#11131a')
$ink = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#edf0f7'))
$accent = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#b9a0ff'))
$surface = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#161922'))
$muted = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#b1b6c7'))
$line = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml('#343b4c'), 1)
$fontTitle = New-Object System.Drawing.Font('Segoe UI', 88, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$fontSubtitle = New-Object System.Drawing.Font('Segoe UI', 28, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$fontSmall = New-Object System.Drawing.Font('Segoe UI', 17, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$fontArea = New-Object System.Drawing.Font('Segoe UI', 21, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$fontProof = New-Object System.Drawing.Font('Segoe UI', 15, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$graphics.Clear($paper)
$graphics.DrawString('KAAN BAS / ENGINEERINGPORTFOLIO', $fontSmall, $muted, 75, 65)
$graphics.DrawString('Kaan Bas', $fontTitle, $ink, 67, 154)
$graphics.DrawString('.', $fontTitle, $accent, 438, 154)
$graphics.DrawString('Toegepaste AI & machine learning.', $fontSubtitle, $accent, 75, 285)
$graphics.DrawString('Bekijk mijn werk per vakgebied.', $fontSubtitle, $ink, 75, 330)
$graphics.DrawString('HBO-ICT: Software Engineering', $fontSmall, $muted, 75, 515)
$graphics.DrawString('Hogeschool van Amsterdam / 2026', $fontSmall, $muted, 75, 545)
$graphics.DrawString('WERK PER VAKGEBIED', $fontSmall, $muted, 755, 105)
$areas = @(
  @{ Title = 'AI Engineering'; Proof = 'Siemens / LLM-offerteautomatisering' },
  @{ Title = 'Data & Machine Learning'; Proof = 'Waternet / classificatie van storingen' },
  @{ Title = 'Software Engineering'; Proof = 'Endeavour / frontend, backend & APIs' }
)
for ($areaIndex = 0; $areaIndex -lt $areas.Count; $areaIndex++) {
  $areaY = 155 + $areaIndex * 108
  $graphics.FillRectangle($surface, 750, $areaY, 370, 90)
  $graphics.DrawRectangle($line, 750, $areaY, 370, 90)
  $graphics.DrawString($areas[$areaIndex].Title, $fontArea, $ink, 772, $areaY + 17)
  $graphics.DrawString($areas[$areaIndex].Proof, $fontProof, $accent, 772, $areaY + 51)
}
$image.Save((Join-Path (Get-Location) 'public\og-image.png'), [System.Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$image.Dispose()
$ink.Dispose()
$accent.Dispose()
$surface.Dispose()
$muted.Dispose()
$line.Dispose()
$fontTitle.Dispose()
$fontSubtitle.Dispose()
$fontSmall.Dispose()
$fontArea.Dispose()
$fontProof.Dispose()
Write-Output 'Created public/og-image.png (1200 x 630).'

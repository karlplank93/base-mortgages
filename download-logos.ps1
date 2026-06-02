# Downloads real bank logos into public/logos/
# Run: powershell -ExecutionPolicy Bypass -File .\download-logos.ps1

$dest = Join-Path $PSScriptRoot "public\logos"

# SVG logos (direct from bank websites)
$svgLogos = @(
    @{ name = "tsb"; url = "https://www.tsb.co.nz/themes/TSB/logo.svg" }
)

# PNG logos (will be saved as .png, component updated accordingly)
$pngLogos = @(
    @{ name = "westpac"; url = "https://www.westpac.co.nz/_resources/themes/app/dist/images/westpac-logo.png" },
    @{ name = "anz";     url = "https://www.anz.co.nz/content/dam/anzconz/images/global/anz-logo-blue.png" },
    @{ name = "asb";     url = "https://www.asb.co.nz/content/dam/asb/images/logo/asb-logo.png" },
    @{ name = "bnz";     url = "https://www.bnz.co.nz/assets/images/bnz-logo.png" },
    @{ name = "kiwibank"; url = "https://www.kiwibank.co.nz/assets/images/kiwibank-logo.png" },
    @{ name = "sbs";     url = "https://www.sbsbank.co.nz/assets/Uploads/sbs-bank-logo.png" }
)

foreach ($logo in $svgLogos) {
    $outFile = Join-Path $dest "$($logo.name).svg"
    Write-Host "Downloading $($logo.name).svg..." -NoNewline
    try {
        Invoke-WebRequest -Uri $logo.url -OutFile $outFile -UseBasicParsing -TimeoutSec 10
        $bytes = (Get-Item $outFile).Length
        Write-Host " OK ($bytes bytes)" -ForegroundColor Green
    } catch { Write-Host " FAILED: $_" -ForegroundColor Red }
}

foreach ($logo in $pngLogos) {
    $outFile = Join-Path $dest "$($logo.name).png"
    Write-Host "Downloading $($logo.name).png..." -NoNewline
    try {
        Invoke-WebRequest -Uri $logo.url -OutFile $outFile -UseBasicParsing -TimeoutSec 10
        $bytes = (Get-Item $outFile).Length
        if ($bytes -gt 1000) {
            Write-Host " OK ($bytes bytes)" -ForegroundColor Green
        } else {
            Write-Host " Too small - URL may be wrong ($bytes bytes)" -ForegroundColor Yellow
            Remove-Item $outFile -ErrorAction SilentlyContinue
        }
    } catch { Write-Host " FAILED: $_" -ForegroundColor Red }
}

Write-Host "`nDone. Files in public\logos\:"
Get-ChildItem $dest | Select-Object Name, Length | Format-Table

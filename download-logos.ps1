# Downloads official bank logo SVGs into public/logos/
# Run from the project root: powershell -ExecutionPolicy Bypass -File .\download-logos.ps1

$logos = @(
    @{ name = "anz";      url = "https://upload.wikimedia.org/wikipedia/commons/a/a3/ANZ_logo.svg" },
    @{ name = "asb";      url = "https://upload.wikimedia.org/wikipedia/commons/7/71/ASB_Bank_logo.svg" },
    @{ name = "bnz";      url = "https://upload.wikimedia.org/wikipedia/commons/8/8e/BNZ_logo.svg" },
    @{ name = "westpac";  url = "https://upload.wikimedia.org/wikipedia/commons/5/57/Westpac_logo.svg" },
    @{ name = "kiwibank"; url = "https://upload.wikimedia.org/wikipedia/commons/a/ab/Kiwibank_logo.svg" },
    @{ name = "tsb";      url = "https://upload.wikimedia.org/wikipedia/commons/6/69/TSB_Bank_New_Zealand_logo.svg" },
    @{ name = "sbs";      url = "https://upload.wikimedia.org/wikipedia/commons/3/3f/SBS_Bank_logo.svg" }
)

$dest = Join-Path $PSScriptRoot "public\logos"

foreach ($logo in $logos) {
    $outFile = Join-Path $dest "$($logo.name).svg"
    Write-Host "Downloading $($logo.name)..." -NoNewline
    try {
        Invoke-WebRequest -Uri $logo.url -OutFile $outFile -UseBasicParsing -TimeoutSec 10
        $bytes = (Get-Item $outFile).Length
        if ($bytes -gt 500) {
            Write-Host " OK ($bytes bytes)" -ForegroundColor Green
        } else {
            Write-Host " SMALL - may have failed ($bytes bytes)" -ForegroundColor Yellow
        }
    } catch {
        Write-Host " FAILED: $_" -ForegroundColor Red
    }
}

Write-Host "`nDone. Check public\logos\ for the downloaded files."

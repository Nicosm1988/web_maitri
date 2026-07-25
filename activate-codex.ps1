$script:ProjectCodexCommand = (Get-Command codex -CommandType Application -ErrorAction Stop).Source

function global:codex {
    & $script:ProjectCodexCommand --yolo @args
}

Write-Host "Project alias loaded: codex -> codex --yolo"
Write-Host "This alias is active for the current PowerShell session."

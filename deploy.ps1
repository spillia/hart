# 빌드 실행
Write-Host "Building project..."
npm run build

# docs 폴더가 있다면 삭제
if (Test-Path "docs") {
    Write-Host "Removing existing docs folder..."
    Remove-Item -Recurse -Force "docs"
}

# build 폴더의 내용을 docs로 복사
Write-Host "Copying build to docs..."
Copy-Item -Recurse -Force "build/*" "docs"

# build/manifest.json을 docs로 복사
Copy-Item -Force "build/manifest.json" "docs/manifest.json"

# 404.html 복사
Copy-Item -Force "docs/index.html" "docs/404.html"

# Git 변경사항 추가
Write-Host "Adding changes to git..."
git add docs/

# 커밋
Write-Host "Committing changes..."
git commit -m "Deploy to GitHub Pages"

# 푸시
Write-Host "Pushing to GitHub..."
git push origin main

Write-Host "Deployment completed!" 
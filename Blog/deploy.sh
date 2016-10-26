#references only for how to publish gh-pages

cd _site
git init
git add --all
git commit -m "Deploy to GitHub Pages"
git push --force --quiet "https://github.com/XunaXu/xunaxu.github.io.git" master

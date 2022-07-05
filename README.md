# PixelattoWeb2020

## How to run the project (big steps)
- Install Jekyll: https://jekyllrb.com/docs/
- Install Git lfs: https://git-lfs.github.com/
- Install Netlify: https://docs.netlify.com/cli/get-started/#installation
- Install Netlify lm (large media) plugin: https://github.com/netlify/netlify-lm-plugin
- Ensure Netlify works properly running `netlify lm:info`
- In Git Credentials version fails, install it: https://github.com/netlify/netlify-credential-helper

- Login netlify typing `netlify login`
- Clone the project at whatever directory you want
- Run `git lfs fetch --all` for retreiving the information of the fls files from Netlify server
- Run `git lfs checkout` for moving these files into your local project, so you can see them when you deploy
- Deploy locally running `bundle exec jekyll serve` and crossfingers opening 127.0.0.1:4000

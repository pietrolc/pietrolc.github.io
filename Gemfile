source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
#gem "jekyll", "~> 4.4.1"
# This is the default theme for new Jekyll sites. You may change this to anything you like.
# gem "minima", "~> 2.5"
gem "jekyll-theme-minimal"
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
gem "github-pages", group: :jekyll_plugins
# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17" # Latest is 0.17.0, compatible with Jekyll >= 3.7
  gem "jekyll-sitemap", "~> 1.4" # Latest is 1.4.0, compatible with Jekyll >= 3.7
  gem "jekyll-seo-tag", "~> 2.8" # Latest is 2.8.0, compatible with Jekyll >= 3.8
  gem "jekyll-github-metadata", "~> 2.16" # Latest is 2.16.1, compatible with Jekyll >= 3.4
  gem "jekyll-paginate-v2", "~> 3.0" # This plugin generally works well with newer Jekyll versions. Check its GitHub for the latest recommended version if issues arise. Version 3.0.0 is the latest.
  gem "jekyll-relative-links", "~> 0.6" # Latest is 0.6.0, compatible with Jekyll >= 3.4
  gem "jekyll-optional-front-matter", "~> 0.2" # Latest is 0.2.2, compatible with Jekyll >= 3.0
  gem "jekyll-readme-index", "~> 0.3" # Latest is 0.3.0, compatible with Jekyll >= 3.0
  gem "jekyll-default-layout", "~> 0.1" # Latest is 0.1.5, compatible with Jekyll >= 3.0
  gem "jekyll-titles-from-headings", "~> 0.5" # Latest is 0.5.3, compatible with Jekyll >= 3.3
  gem "jekyll-remote-theme", "~> 0.4" # Latest is 0.4.3, compatible with Jekyll >= 3.5
  gem "jekyll-author", "~> 0.1" # There isn't a widely recognized 'jekyll-author' plugin with recent updates. If this is a custom or less common plugin, you'll need to verify its compatibility or remove it if it's causing issues. Assuming it's compatible if it worked previously.
  gem "jekyll-toc", "~> 0.19.0" # The last version of jekyll-toc on RubyGems is 0.19. It uses Liquid to generate a TOC.
  #gem "jekyll_picture_tag", "~> 2.0"
end

  #Unused plugins


# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

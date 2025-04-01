module Jekyll
  module JsonSafeFilter
    def json_safe(input)
      return input.to_json
    end
  end
end

Liquid::Template.register_filter(Jekyll::JsonSafeFilter)
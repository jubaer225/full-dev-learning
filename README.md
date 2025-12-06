# Shopify Theme Learning Project

A beginner-friendly Shopify theme development project for learning liquid templating, theme structure, and best practices.

## 📁 Project Structure

```
├── config/
│   └── settings_schema.json    # Theme customization settings
├── layout/
│   └── theme.liquid            # Main HTML layout template
├── templates/                  # Page templates
├── sections/                   # Reusable theme sections
├── snippets/                   # Reusable code snippets
├── assets/                     # CSS, JavaScript, images
└── locales/                    # Language translations
```

## 🎯 Key Concepts to Learn

### 1. **Liquid Templating**

- Variable output: `{{ variable }}`
- Logic tags: `{% if %} ... {% endif %}`
- Loops: `{% for item in items %} ... {% endfor %}`
- Filters: `{{ text | upcase }}`

### 2. **Settings Schema**

- Define customizable options for store owners
- Supported types: color, font_picker, text, checkbox, etc.
- Settings can be accessed in templates with `settings.setting_id`

### 3. **Theme Files**

- **layout/theme.liquid**: Main wrapper for all pages
- **templates/**: Custom templates for different page types (index, product, collection, etc.)
- **sections/**: Modular, customizable page components
- **snippets/**: Reusable code blocks

## 🚀 Getting Started

1. **Explore the files**: Each file contains comments explaining its purpose
2. **Customize settings**: Edit `config/settings_schema.json` to add new options
3. **Create templates**: Add new files to `templates/` for different page types
4. **Build sections**: Create dynamic components in `sections/`

## 📝 Common Liquid Objects

- `{{ shop }}` - Store information
- `{{ product }}` - Product data
- `{{ collection }}` - Collection data
- `{{ page }}` - Page content
- `{{ settings.property_name }}` - Access theme settings

## 💡 Tips

- Always test changes in your Shopify store theme editor
- Use Liquid comments `{%- comment -%}...{%- endcomment -%}` for documentation
- Keep code modular and reusable
- Follow Shopify's best practices for performance

Happy learning! 🎉

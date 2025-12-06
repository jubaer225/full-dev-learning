# 🎓 Shopify Theme Development Learning Guide

## Getting Started Overview

This project is structured to teach you Shopify theme development step by step. Each file has comments explaining what it does.

---

## 📚 What You'll Learn

### Phase 1: Basics

- [x] Project structure and file organization
- [x] HTML layout with Liquid templating
- [x] Configuration and theme settings
- [ ] Creating and customizing templates
- [ ] Building reusable components

### Phase 2: Intermediate

- [ ] Working with Liquid filters and tags
- [ ] Conditional logic
- [ ] Loops and iterations
- [ ] Using Shopify objects (product, collection, etc.)

### Phase 3: Advanced

- [ ] Custom sections with dynamic settings
- [ ] Accessing theme settings in templates
- [ ] Performance optimization
- [ ] Responsive design patterns

---

## 🗂️ File-by-File Explanation

### `layout/theme.liquid`

Your main HTML wrapper. Every page goes through this.

- `{{ content_for_header }}` - Required Shopify tags
- `{{ content_for_layout }}` - Where page content renders
- Include CSS and JS here

### `templates/index.liquid`

Homepage template - shows store data dynamically.

- `{{ shop.name }}` - Store name
- `collections.featured` - Featured products
- Loops through products

### `config/settings_schema.json`

Store owner customization options.

- Define color, font, text settings
- These appear in the Shopify admin
- Access with `{{ settings.setting_id }}`

### `sections/hero.liquid`

Modular page component with its own settings.

- Has a `{% schema %}` block
- Can be added/removed in page editor
- Each section is customizable

### `snippets/product-price.liquid`

Reusable code block.

- Include with: `{% include 'product-price' %}`
- Keeps code DRY (Don't Repeat Yourself)

### `assets/theme.css` & `assets/theme.js`

Stylesheet and JavaScript files referenced in layout.

---

## 🚀 Common Tasks

### Display a Product Price

```liquid
<span>{{ product.price | money }}</span>
```

### Loop Through Collections

```liquid
{% for product in collection.products %}
  <p>{{ product.title }} - {{ product.price | money }}</p>
{% endfor %}
```

### Use a Setting

```liquid
<div style="color: {{ settings.primary_color }}">
  Colored text!
</div>
```

### Show Content Conditionally

```liquid
{% if product.available %}
  <button>Add to Cart</button>
{% else %}
  <p>Sold Out</p>
{% endif %}
```

### Apply a Filter

```liquid
{{ 'hello world' | upcase }}          <!-- Output: HELLO WORLD -->
{{ 23.4 | ceil }}                      <!-- Output: 24 -->
{{ 'hello' | append: ' world' }}      <!-- Output: hello world -->
```

---

## 📖 Liquid Template Language Basics

### Output Variables

```liquid
{{ variable }}
{{ object.property }}
{{ array[0] }}
```

### Filters (transform output)

```liquid
{{ 'text' | upcase }}
{{ 'TEXT' | downcase }}
{{ 100.5 | round }}
{{ date | date: '%Y-%m-%d' }}
{{ 'hello' | replace: 'l', 'L' }}
```

### Logic Tags

```liquid
{% if condition %}
  content
{% elsif other_condition %}
  other content
{% else %}
  default content
{% endif %}

{% unless condition %}
  content
{% endunless %}
```

### Loops

```liquid
{% for item in array %}
  {{ item }}
{% endfor %}

{% for i in (1..5) %}
  {{ i }}
{% endfor %}
```

### Comments

```liquid
{%- comment -%}
  Multi-line comment
  Not rendered in HTML
{%- endcomment -%}

{# Single line comment #}
```

---

## 🔗 Important Shopify Objects

| Object       | Description      | Example                                      |
| ------------ | ---------------- | -------------------------------------------- |
| `shop`       | Store info       | `{{ shop.name }}`, `{{ shop.currency }}`     |
| `product`    | Product data     | `{{ product.title }}`, `{{ product.price }}` |
| `collection` | Collection data  | `{{ collection.products }}`                  |
| `page`       | Page content     | `{{ page.title }}`, `{{ page.content }}`     |
| `cart`       | Shopping cart    | `{{ cart.item_count }}`                      |
| `customer`   | Customer data    | `{{ customer.first_name }}`                  |
| `section`    | Section settings | `{{ section.settings.setting_id }}`          |

---

## 💡 Pro Tips

1. **Use Whitespace Control** - `{%-` and `-%}` remove whitespace

   ```liquid
   {%- for item in items -%}
     {{ item }}
   {%- endfor -%}
   ```

2. **CSS in Sections** - Use `<style>` tags to scope styles

   ```liquid
   <style>
     .my-section { color: red; }
   </style>
   ```

3. **Responsive Images** - Use `image_url` filter

   ```liquid
   {{ product.featured_image | image_url: width: 300 }}
   ```

4. **Fallback Content** - Use default values

   ```liquid
   {{ page.title | default: 'Untitled' }}
   ```

5. **Money Formatting** - Always use `money` filter for prices
   ```liquid
   {{ product.price | money }}
   ```

---

## 🔗 Resources

- [Shopify Liquid Documentation](https://shopify.dev/api/liquid)
- [Shopify Theme Development](https://shopify.dev/themes)
- [Liquid Cheat Sheet](https://www.shopify.com/partners/blog/119560065-liquid-template-language-cheat-sheet)

---

## 📝 Next Steps

1. Open each file and read the comments
2. Try modifying settings in `config/settings_schema.json`
3. Add new sections to `templates/index.liquid`
4. Create a new template file for products
5. Build a custom section with its own settings

Happy learning! 🎉

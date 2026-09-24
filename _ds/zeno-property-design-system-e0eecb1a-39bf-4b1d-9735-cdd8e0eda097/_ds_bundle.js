/* @ds-bundle: {"format":3,"namespace":"ZenoPropertyDesignSystem_e0eecb","components":[{"name":"ActionSheet","sourcePath":"components/ActionSheet/ActionSheet.jsx"},{"name":"Avatar","sourcePath":"components/Avatar/Avatar.jsx"},{"name":"Badge","sourcePath":"components/Badge/Badge.jsx"},{"name":"BottomSheet","sourcePath":"components/BottomSheet/BottomSheet.jsx"},{"name":"Button","sourcePath":"components/Button/Button.jsx"},{"name":"Card","sourcePath":"components/Card/Card.jsx"},{"name":"Checkbox","sourcePath":"components/Checkbox/Checkbox.jsx"},{"name":"Chip","sourcePath":"components/Chip/Chip.jsx"},{"name":"Divider","sourcePath":"components/Divider/Divider.jsx"},{"name":"Icon","sourcePath":"components/Icon/Icon.jsx"},{"name":"IconButton","sourcePath":"components/IconButton/IconButton.jsx"},{"name":"Input","sourcePath":"components/Input/Input.jsx"},{"name":"NavBar","sourcePath":"components/NavBar/NavBar.jsx"},{"name":"NotificationCard","sourcePath":"components/NotificationCard/NotificationCard.jsx"},{"name":"ProgressBar","sourcePath":"components/ProgressBar/ProgressBar.jsx"},{"name":"PropertyCard","sourcePath":"components/PropertyCard/PropertyCard.jsx"},{"name":"Radio","sourcePath":"components/Radio/Radio.jsx"},{"name":"SearchBar","sourcePath":"components/SearchBar/SearchBar.jsx"},{"name":"SegmentedControl","sourcePath":"components/SegmentedControl/SegmentedControl.jsx"},{"name":"Slider","sourcePath":"components/Slider/Slider.jsx"},{"name":"Snackbar","sourcePath":"components/Snackbar/Snackbar.jsx"},{"name":"Stepper","sourcePath":"components/Stepper/Stepper.jsx"},{"name":"Switch","sourcePath":"components/Switch/Switch.jsx"},{"name":"TabBar","sourcePath":"components/TabBar/TabBar.jsx"},{"name":"Tabs","sourcePath":"components/Tabs/Tabs.jsx"},{"name":"Tooltip","sourcePath":"components/Tooltip/Tooltip.jsx"}],"sourceHashes":{"components/ActionSheet/ActionSheet.jsx":"77986a79e2a4","components/Avatar/Avatar.jsx":"c3a4273d0eb8","components/Badge/Badge.jsx":"f7be383c5b6f","components/BottomSheet/BottomSheet.jsx":"ad0182300bfd","components/Button/Button.jsx":"03590e85ae7e","components/Card/Card.jsx":"f14b8b9d2f00","components/Checkbox/Checkbox.jsx":"792c1a80e54d","components/Chip/Chip.jsx":"c11ace657fd2","components/Divider/Divider.jsx":"531ddbe8554c","components/Icon/Icon.jsx":"a9ab285d9b81","components/IconButton/IconButton.jsx":"b43dfbf60a9f","components/Input/Input.jsx":"5cca7ee81c87","components/NavBar/NavBar.jsx":"ea36a512e8e3","components/NotificationCard/NotificationCard.jsx":"d5067d51f87f","components/ProgressBar/ProgressBar.jsx":"f172b1a1abf5","components/PropertyCard/PropertyCard.jsx":"6a59ad24286d","components/Radio/Radio.jsx":"b583f3f182ca","components/SearchBar/SearchBar.jsx":"efdbf474da31","components/SegmentedControl/SegmentedControl.jsx":"3baf38ce5c04","components/Slider/Slider.jsx":"c6d29b179095","components/Snackbar/Snackbar.jsx":"09511abfe243","components/Stepper/Stepper.jsx":"03c3016cc8e3","components/Switch/Switch.jsx":"b167f67d7031","components/TabBar/TabBar.jsx":"73c5c8ef8a1a","components/Tabs/Tabs.jsx":"027400037bda","components/Tooltip/Tooltip.jsx":"a2b1ce27a080","ui_kits/zeno-app/App.jsx":"43856ba3317b","ui_kits/zeno-app/DetailScreen.jsx":"d82f8c042e15","ui_kits/zeno-app/HomeScreen.jsx":"bf883991b820","ui_kits/zeno-app/ProfileScreen.jsx":"f1296bf05fb8","ui_kits/zeno-app/SavedScreen.jsx":"80566298bf2f","ui_kits/zeno-app/data.js":"269e5dcd7924","ui_kits/zeno-app/phone-frame.jsx":"cf55779ec74f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ZenoPropertyDesignSystem_e0eecb = window.ZenoPropertyDesignSystem_e0eecb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Avatar/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Avatar — full-radius image/initials. size: 24 | 32 | 40 | 48 | 64. Optional status dot. */
function Avatar({
  src,
  alt = "",
  initials,
  size = 48,
  status,
  style,
  ...rest
}) {
  const dot = status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      bottom: 0,
      width: Math.round(size * 0.28),
      height: Math.round(size * 0.28),
      borderRadius: "var(--radius-full)",
      background: status === "online" ? "var(--green-base)" : status === "busy" ? "var(--red-base)" : "var(--neutral-300)",
      border: "2px solid var(--surface-page)"
    }
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      width: size,
      height: size,
      flexShrink: 0,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-full)",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-full)",
      background: initials ? "var(--brand-lightest)" : "var(--neutral-100)",
      color: "var(--brand-dark)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      fontSize: Math.round(size * 0.4)
    }
  }, initials || ""), dot);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Avatar/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/Badge/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — status label. status: success | error | warning | info | neutral.
 * shape: pill (radius 32) | rounded (radius 8). Font: Nunito Sans Medium 14.
 */
function Badge({
  children,
  status = "success",
  shape = "pill",
  style,
  ...rest
}) {
  const palette = {
    success: {
      bg: "var(--badge-success-bg)",
      fg: "var(--badge-success-fg)"
    },
    error: {
      bg: "var(--badge-error-bg)",
      fg: "var(--badge-error-fg)"
    },
    warning: {
      bg: "var(--badge-warning-bg)",
      fg: "var(--badge-warning-fg)"
    },
    info: {
      bg: "var(--badge-info-bg)",
      fg: "var(--badge-info-fg)"
    },
    neutral: {
      bg: "var(--badge-neutral-bg)",
      fg: "var(--badge-neutral-fg)"
    }
  }[status] || {};
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 12px",
      borderRadius: shape === "rounded" ? "var(--radius-m)" : "var(--radius-full)",
      background: palette.bg,
      color: palette.fg,
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--text-body-sm)",
      lineHeight: 1.2,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/BottomSheet/BottomSheet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BottomSheet — surface/page, top radius 24, grab handle (neutral-200, 4x32).
 * Renders an optional scrim. Position: docked at bottom of its relative parent.
 */
function BottomSheet({
  children,
  title,
  open = true,
  onClose,
  scrim = true,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, scrim && /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-scrim)",
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 2,
      background: "var(--surface-page)",
      borderTopLeftRadius: "var(--radius-xxxl)",
      borderTopRightRadius: "var(--radius-xxxl)",
      padding: "12px 16px 24px",
      boxShadow: "var(--shadow-xl)",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 4,
      borderRadius: "var(--radius-full)",
      background: "var(--neutral-200)"
    }
  })), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 12px",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-title3)",
      color: "var(--content-primary)"
    }
  }, title), children));
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/BottomSheet/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/Card/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Card — generic surface container. card/bg + card/border, radius L (12), pad md (16). */
function Card({
  children,
  padding = 16,
  elevated = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--card-bg)",
      border: "1px solid var(--card-border)",
      borderRadius: "var(--radius-l)",
      padding,
      boxShadow: elevated ? "var(--shadow-md)" : "none",
      boxSizing: "border-box",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card/Card.jsx", error: String((e && e.message) || e) }); }

// components/Checkbox/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox — 20x20, radius 4. state: default | checked | indeterminate (+ disabled). */
function Checkbox({
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange,
  label,
  style,
  ...rest
}) {
  const active = checked || indeterminate;
  const box = {
    width: 20,
    height: 20,
    flexShrink: 0,
    borderRadius: "var(--radius-s)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: active ? "1.5px solid var(--brand-primary)" : "1.5px solid var(--border-default)",
    background: active ? "var(--brand-primary)" : "var(--surface-page)",
    transition: "background 120ms ease, border-color 120ms ease",
    opacity: disabled ? 0.5 : 1
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    role: "checkbox",
    "aria-checked": indeterminate ? "mixed" : checked,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: box
  }, rest), indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 2,
      borderRadius: 1,
      background: "var(--sky-white)"
    }
  }) : checked ? /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 13 13",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.8L5 9.3L10.5 3.5",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : null), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      color: "var(--content-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Checkbox/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/Divider/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Divider — 1px border/subtle line. orientation: horizontal | vertical. padded adds margin. */
function Divider({
  orientation = "horizontal",
  padded = false,
  label,
  style,
  ...rest
}) {
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        margin: padded ? "16px 0" : 0,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-subtle)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-caption)",
        color: "var(--content-disabled)",
        whiteSpace: "nowrap"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-subtle)"
      }
    }));
  }
  if (orientation === "vertical") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        width: 1,
        alignSelf: "stretch",
        background: "var(--border-subtle)",
        margin: padded ? "0 16px" : 0,
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      height: 1,
      width: "100%",
      background: "var(--border-subtle)",
      margin: padded ? "16px 0" : 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Divider/Divider.jsx", error: String((e && e.message) || e) }); }

// components/Icon/Icon.jsx
try { (() => {
/**
 * Icon — Zeno's icon primitive.
 *
 * The Figma file uses the Iconsax (vuesax) BOLD/filled family. That set is not
 * on the open Iconify CDN, so we render the visually-closest filled set, "Solar"
 * (bold weight), through the <iconify-icon> web component. The host page must
 * load the iconify-icon script (see component card / UI kit) for icons to paint.
 *
 * Pass a bare name (e.g. "home-2", "heart") and we append the "-bold" Solar
 * weight, or pass a fully-qualified "set:name" to override entirely.
 */
function Icon({
  name = "home-2",
  size = 24,
  color,
  set = "solar",
  weight = "bold",
  style,
  ...rest
}) {
  const icon = name.includes(":") ? name : `${set}:${name}-${weight}`;
  return React.createElement("iconify-icon", {
    icon,
    width: size,
    height: size,
    style: {
      color: color || "currentColor",
      display: "inline-flex",
      lineHeight: 0,
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/ActionSheet/ActionSheet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ActionSheet — list of actions in a bottom sheet. Items Nunito Sans Regular 16.
 * Destructive items use feedback/error/content. Includes a Cancel row.
 */
function ActionSheet({
  title,
  actions = [],
  open = true,
  onClose,
  cancelLabel = "Cancel",
  scrim = true,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, scrim && /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-scrim)",
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 2,
      padding: 8,
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-overlay)",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-xl)"
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px",
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-caption)",
      color: "var(--content-disabled)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, title), actions.map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    className: "zeno-pressable",
    onClick: () => {
      a.onClick && a.onClick();
      onClose && onClose();
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      width: "100%",
      padding: "16px",
      border: "none",
      borderTop: i === 0 ? "none" : "1px solid var(--border-subtle)",
      background: "transparent",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-regular)",
      fontSize: "var(--text-body)",
      color: a.destructive ? "var(--feedback-error-content)" : "var(--content-primary)",
      textAlign: "left"
    }
  }, a.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: a.icon,
    size: 22,
    color: a.destructive ? "var(--feedback-error-content)" : "var(--content-secondary)"
  }), a.label))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    style: {
      width: "100%",
      marginTop: 8,
      padding: "16px",
      border: "none",
      borderRadius: "var(--radius-xl)",
      background: "var(--surface-overlay)",
      boxShadow: "var(--shadow-xl)",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-body)",
      color: "var(--brand-primary)"
    }
  }, cancelLabel)));
}
Object.assign(__ds_scope, { ActionSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ActionSheet/ActionSheet.jsx", error: String((e && e.message) || e) }); }

// components/Button/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Zeno's primary action control.
 * Type: primary | secondary | outline | transparent
 * Size: block (48px, full width) | large (48px, hug) | small (32px)
 * iconPosition: left | right | side  (side = label and icon pushed apart)
 */
function Button({
  children,
  type = "primary",
  size = "large",
  disabled = false,
  icon,
  iconPosition = "left",
  onClick,
  style,
  ...rest
}) {
  const sizing = {
    block: {
      height: 48,
      padding: "0 24px",
      font: "var(--text-body)",
      width: "100%"
    },
    large: {
      height: 48,
      padding: "0 24px",
      font: "var(--text-body)",
      width: "auto"
    },
    small: {
      height: 32,
      padding: "0 16px",
      font: "var(--text-body-sm)",
      width: "auto"
    }
  }[size] || {
    height: 48,
    padding: "0 24px",
    font: "var(--text-body)",
    width: "auto"
  };
  const typeStyles = {
    primary: {
      background: "var(--button-primary-bg)",
      color: "var(--button-primary-fg)",
      border: "1px solid transparent"
    },
    secondary: {
      background: "var(--button-secondary-bg)",
      color: "var(--button-secondary-fg)",
      border: "1px solid transparent"
    },
    outline: {
      background: "transparent",
      color: "var(--button-secondary-fg)",
      border: "1.5px solid var(--button-border)"
    },
    transparent: {
      background: "transparent",
      color: "var(--button-ghost-fg)",
      border: "1px solid transparent"
    }
  }[type] || {};
  const disabledStyle = disabled ? {
    background: type === "outline" || type === "transparent" ? "transparent" : "var(--button-disabled-bg)",
    color: "var(--button-disabled-fg)",
    border: type === "outline" ? "1.5px solid var(--button-disabled-bg)" : "1px solid transparent"
  } : {};
  const iconSize = size === "small" ? 18 : 20;
  const glyph = icon ? typeof icon === "string" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }) : icon : null;
  const side = iconPosition === "side";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    "data-type": type,
    className: "zeno-btn",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: side ? "space-between" : "center",
      gap: 8,
      flexDirection: iconPosition === "right" ? "row-reverse" : "row",
      height: sizing.height,
      width: sizing.width,
      padding: sizing.padding,
      borderRadius: "var(--radius-m)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-medium)",
      fontSize: sizing.font,
      lineHeight: 1,
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "filter 120ms ease, transform 80ms ease",
      WebkitTapHighlightColor: "transparent",
      ...typeStyles,
      ...disabledStyle,
      ...style
    }
  }, rest), glyph, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/Chip/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Chip (Pill) — selected = brand + white; default = neutral-25 + secondary. Radius full, pad 8/16. */
function Chip({
  children,
  selected = false,
  disabled = false,
  icon,
  onClose,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: "zeno-chip",
    "data-disabled": disabled,
    onClick: () => !disabled && onClick && onClick(),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "8px 16px",
      border: selected ? "1px solid var(--brand-primary)" : "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-full)",
      background: selected ? "var(--brand-primary)" : "var(--neutral-25)",
      color: selected ? "var(--sky-white)" : "var(--content-secondary)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--text-body-sm)",
      lineHeight: 1,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background 140ms ease, color 140ms ease, transform 80ms ease",
      ...style
    }
  }, rest), icon && (typeof icon === "string" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : icon), /*#__PURE__*/React.createElement("span", null, children), onClose && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onClose();
    },
    style: {
      display: "inline-flex",
      marginLeft: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close-circle",
    size: 16
  })));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Chip/Chip.jsx", error: String((e && e.message) || e) }); }

// components/IconButton/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square tap target for a single icon action.
 * type: primary | secondary | outline | transparent
 * size: lg (44px) | sm (32px)
 */
function IconButton({
  icon = "more",
  type = "secondary",
  size = "lg",
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const dim = size === "sm" ? 32 : 44;
  const iconSize = size === "sm" ? 18 : 22;
  const typeStyles = {
    primary: {
      background: "var(--button-primary-bg)",
      color: "var(--button-primary-fg)",
      border: "1px solid transparent"
    },
    secondary: {
      background: "var(--neutral-25)",
      color: "var(--content-primary)",
      border: "1px solid transparent"
    },
    outline: {
      background: "transparent",
      color: "var(--content-primary)",
      border: "1.5px solid var(--button-border)"
    },
    transparent: {
      background: "transparent",
      color: "var(--content-primary)",
      border: "1px solid transparent"
    }
  }[type] || {};
  const disabledStyle = disabled ? {
    background: type === "primary" || type === "secondary" ? "var(--button-disabled-bg)" : "transparent",
    color: "var(--button-disabled-fg)"
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    className: "zeno-icon-btn",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      borderRadius: "var(--radius-m)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "filter 120ms ease, transform 80ms ease",
      WebkitTapHighlightColor: "transparent",
      ...typeStyles,
      ...disabledStyle,
      ...style
    }
  }, rest), typeof icon === "string" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }) : icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/IconButton/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/Input/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field. type: text | mobile | icon | dropdown.
 * state is derived from props (focus/value/error/disabled) but can be forced.
 */
function Input({
  type = "text",
  label,
  placeholder = "",
  value,
  defaultValue,
  onChange,
  icon = "sms",
  error,
  disabled = false,
  dialCode = "+95",
  helper,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const [internal, setInternal] = React.useState(defaultValue || "");
  const val = value !== undefined ? value : internal;
  const handle = e => {
    if (value === undefined) setInternal(e.target.value);
    onChange && onChange(e);
  };
  const borderColor = disabled ? "var(--border-subtle)" : error ? "var(--input-border-error)" : focused ? "var(--input-border-focus)" : "var(--input-border)";
  const borderWidth = focused && !disabled && !error ? 1.5 : error ? 1.5 : 1;
  const fieldStyle = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    height: 48,
    padding: "0 16px",
    borderRadius: "var(--radius-m)",
    background: disabled ? "var(--input-disabled-bg)" : "var(--input-bg)",
    border: `${borderWidth}px solid ${borderColor}`,
    transition: "border-color 120ms ease",
    boxSizing: "border-box"
  };
  const inputBase = {
    flex: 1,
    border: "none",
    outline: "none",
    background: "transparent",
    fontFamily: "var(--font-body)",
    fontWeight: "var(--weight-regular)",
    fontSize: "var(--text-body)",
    color: disabled ? "var(--input-disabled-fg)" : "var(--input-fg)",
    minWidth: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      width: "100%",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--text-body-sm)",
      color: "var(--content-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: fieldStyle
  }, type === "icon" && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: "var(--content-disabled)"
  }), type === "mobile" && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      paddingRight: 8,
      marginRight: 2,
      borderRight: "1px solid var(--border-subtle)",
      color: "var(--content-primary)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--text-body)"
    }
  }, dialCode), /*#__PURE__*/React.createElement("input", _extends({
    className: "zeno-input",
    type: "text",
    placeholder: placeholder,
    value: val,
    disabled: disabled,
    onChange: handle,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: inputBase
  }, rest)), type === "dropdown" && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "alt-arrow-down",
    size: 20,
    color: "var(--content-secondary)"
  })), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-caption)",
      color: error ? "var(--feedback-error-content)" : "var(--content-disabled)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Input/Input.jsx", error: String((e && e.message) || e) }); }

// components/NavBar/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** NavBar (Standard) — 44px bar. Back + title + optional right action(s). */
function NavBar({
  title = "",
  onBack,
  leftIcon = "alt-arrow-left",
  rightActions = [],
  large = false,
  caption,
  style,
  ...rest
}) {
  if (large) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        background: "var(--surface-page)",
        padding: "8px 16px 12px",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 44
      }
    }, onBack ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "zeno-icon-btn",
      onClick: onBack,
      style: iconBtn
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: leftIcon,
      size: 24,
      color: "var(--neutral-900)"
    })) : /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 4
      }
    }, rightActions.map((a, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "zeno-icon-btn",
      onClick: a.onClick,
      style: iconBtn
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: a.icon,
      size: 24,
      color: "var(--neutral-900)"
    }))))), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: "8px 0 0",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-bold)",
        fontSize: "var(--text-title2)",
        color: "var(--content-primary)",
        lineHeight: 1.2
      }
    }, title), caption && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-body-sm)",
        color: "var(--content-secondary)"
      }
    }, caption));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 44,
      padding: "0 8px",
      background: "var(--surface-page)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      width: 88
    }
  }, onBack && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "zeno-icon-btn",
    onClick: onBack,
    style: iconBtn
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leftIcon,
    size: 24,
    color: "var(--neutral-900)"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-body)",
      color: "var(--content-primary)",
      textAlign: "center",
      flex: 1,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      width: 88,
      gap: 4
    }
  }, rightActions.map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    className: "zeno-icon-btn",
    onClick: a.onClick,
    style: iconBtn
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: a.icon,
    size: 24,
    color: "var(--neutral-900)"
  })))));
}
const iconBtn = {
  width: 44,
  height: 44,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  borderRadius: "var(--radius-m)"
};
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/NavBar/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/NotificationCard/NotificationCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NotificationCard — card/bg, subtle border, radius L, pad md.
 * Title Nunito Sans Bold 14, body Regular 12. Unread shows a gold dot.
 */
function NotificationCard({
  title = "New viewing request",
  body = "",
  time,
  icon = "home-2",
  unread = false,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "zeno-pressable",
    onClick: onClick,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      background: "var(--card-bg)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-l)",
      padding: 16,
      cursor: onClick ? "pointer" : "default",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 40,
      height: 40,
      borderRadius: "var(--radius-m)",
      background: "var(--brand-lightest)",
      color: "var(--brand-primary)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, typeof icon === "string" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  }) : icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-body-sm)",
      color: "var(--content-primary)"
    }
  }, title), unread && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "var(--radius-full)",
      background: "var(--brand-primary)"
    }
  })), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-regular)",
      fontSize: "var(--text-caption)",
      color: "var(--content-secondary)",
      lineHeight: 1.4
    }
  }, body), time && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 6,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-caption-sm)",
      color: "var(--content-disabled)"
    }
  }, time)));
}
Object.assign(__ds_scope, { NotificationCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/NotificationCard/NotificationCard.jsx", error: String((e && e.message) || e) }); }

// components/ProgressBar/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ProgressBar — gold fill on neutral-100 track, full radius. value 0..100. */
function ProgressBar({
  value = 40,
  height = 8,
  showLabel = false,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      width: "100%",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      height,
      borderRadius: "var(--radius-full)",
      background: "var(--neutral-100)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: `${pct}%`,
      background: "var(--brand-primary)",
      borderRadius: "var(--radius-full)",
      transition: "width 240ms ease"
    }
  })), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--text-body-sm)",
      color: "var(--content-secondary)",
      minWidth: 36,
      textAlign: "right"
    }
  }, pct, "%"));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ProgressBar/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/PropertyCard/PropertyCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PropertyCard ("Room Card") — image, favourite toggle, price, location, meta row.
 * Mirrors the Figma Room Card: radius 8, price Nunito Sans Bold 18, MMK pricing.
 */
function PropertyCard({
  image = "assets/img/property-1.jpg",
  price = "MMK 4,000L",
  location = "Mingalar Taung Nyunt, Yangon",
  beds = 2,
  baths = 2,
  area = "2,700 sq ft",
  badge,
  favourite = false,
  onFavourite,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      width: "100%",
      background: "var(--surface-page)",
      borderRadius: "var(--radius-m)",
      overflow: "hidden",
      cursor: onClick ? "pointer" : "default",
      boxShadow: "var(--shadow-sm)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "357 / 222",
      background: "var(--neutral-100)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: location,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 12,
      left: 12,
      padding: "4px 12px",
      borderRadius: "var(--radius-full)",
      background: "var(--brand-primary)",
      color: "var(--sky-white)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-caption)"
    }
  }, badge), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      onFavourite && onFavourite(!favourite);
    },
    style: {
      position: "absolute",
      top: 12,
      right: 12,
      width: 32,
      height: 32,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-full)",
      border: "none",
      background: "rgba(255,255,255,0.92)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "heart",
    size: 18,
    color: favourite ? "var(--red-base)" : "var(--neutral-400)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-body-lg)",
      color: "var(--content-primary)"
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm)",
      color: "var(--content-secondary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-point",
    size: 16,
    color: "var(--content-disabled)"
  }), location), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    icon: "bed",
    label: `${beds} beds`
  }), /*#__PURE__*/React.createElement(Meta, {
    icon: "bath",
    label: `${baths} baths`
  }), /*#__PURE__*/React.createElement(Meta, {
    icon: "scaling",
    label: area
  }))));
}
function Meta({
  icon,
  label
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-caption)",
      color: "var(--content-secondary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    color: "var(--content-disabled)"
  }), label);
}
Object.assign(__ds_scope, { PropertyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/PropertyCard/PropertyCard.jsx", error: String((e && e.message) || e) }); }

// components/Radio/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio — 20x20, full radius. state: default | selected (+ disabled). */
function Radio({
  selected = false,
  disabled = false,
  onChange,
  label,
  name,
  style,
  ...rest
}) {
  const ring = {
    width: 20,
    height: 20,
    flexShrink: 0,
    borderRadius: "var(--radius-full)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: selected ? "1.5px solid var(--brand-primary)" : "1.5px solid var(--border-default)",
    background: "var(--surface-page)",
    transition: "border-color 120ms ease",
    opacity: disabled ? 0.5 : 1
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    role: "radio",
    "aria-checked": selected,
    "data-name": name,
    onClick: () => !disabled && onChange && onChange(true),
    style: ring
  }, rest), selected && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "var(--radius-full)",
      background: "var(--brand-primary)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      color: "var(--content-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Radio/Radio.jsx", error: String((e && e.message) || e) }); }

// components/SearchBar/SearchBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** SearchBar — 44px, neutral-25 bg, subtle border, radius 8. Optional trailing filter. */
function SearchBar({
  placeholder = "Search homes, areas…",
  value,
  defaultValue,
  onChange,
  onFilter,
  showFilter = false,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue || "");
  const val = value !== undefined ? value : internal;
  const handle = e => {
    if (value === undefined) setInternal(e.target.value);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flex: 1,
      height: 44,
      padding: "0 12px",
      background: "var(--neutral-25)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-m)",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "magnifer",
    size: 20,
    color: "var(--content-disabled)"
  }), /*#__PURE__*/React.createElement("input", {
    className: "zeno-input",
    type: "text",
    placeholder: placeholder,
    value: val,
    onChange: handle,
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body)",
      color: "var(--content-primary)",
      minWidth: 0
    }
  })), showFilter && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "zeno-icon-btn",
    onClick: onFilter,
    style: {
      width: 44,
      height: 44,
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      borderRadius: "var(--radius-m)",
      background: "var(--brand-primary)",
      color: "var(--sky-white)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "filter",
    size: 22
  })));
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/SearchBar/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/SegmentedControl/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** SegmentedControl — active = brand fill + white; inactive = neutral-25 + secondary. Radius 8. */
function SegmentedControl({
  segments = ["One", "Two"],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? segments[0]);
  const active = value !== undefined ? value : internal;
  const pick = s => {
    if (value === undefined) setInternal(s);
    onChange && onChange(s);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      padding: 4,
      gap: 4,
      background: "var(--neutral-25)",
      borderRadius: "var(--radius-m)",
      ...style
    }
  }, rest), segments.map(s => {
    const on = s === active;
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      type: "button",
      className: "zeno-seg-item",
      onClick: () => pick(s),
      style: {
        flex: 1,
        minHeight: 36,
        padding: "0 16px",
        border: "none",
        borderRadius: "var(--radius-s)",
        background: on ? "var(--brand-primary)" : "transparent",
        color: on ? "var(--sky-white)" : "var(--content-secondary)",
        fontFamily: "var(--font-body)",
        fontWeight: on ? "var(--weight-bold)" : "var(--weight-medium)",
        fontSize: "var(--text-body-sm)",
        cursor: "pointer",
        transition: "background 140ms ease, color 140ms ease",
        whiteSpace: "nowrap"
      }
    }, s);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/SegmentedControl/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/Slider/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const THUMB = {
  position: "absolute",
  width: 24,
  height: 24,
  borderRadius: "var(--radius-full)",
  background: "var(--brand-primary)",
  boxShadow: "var(--shadow-sm)",
  touchAction: "none"
};

/** Slider — gold fill on neutral track, solid 24px gold thumb. Single or range (range=true). */
function Slider({
  value,
  defaultValue = 40,
  min = 0,
  max = 100,
  onChange,
  disabled = false,
  range = false,
  rangeValue,
  rangeDefaultValue,
  onRangeChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const [internalRange, setInternalRange] = React.useState(rangeDefaultValue || [20, 60]);
  const val = value !== undefined ? value : internal;
  const rangeVal = rangeValue !== undefined ? rangeValue : internalRange;
  const trackRef = React.useRef(null);
  const pctOf = v => (v - min) / (max - min) * 100;

  // Single slider
  const setFromClientX = clientX => {
    const el = trackRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    let p = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
    const next = Math.round(min + p * (max - min));
    if (value === undefined) setInternal(next);
    onChange && onChange(next);
  };
  const onDown = e => {
    if (disabled) return;
    setFromClientX(e.clientX);
    const move = ev => setFromClientX(ev.clientX);
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  // Range slider
  const setRangeFromClientX = (clientX, thumb) => {
    const el = trackRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    let p = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
    const next = Math.round(min + p * (max - min));
    let [lo, hi] = rangeVal;
    if (thumb === 0) lo = Math.min(next, hi - 1);else hi = Math.max(next, lo + 1);
    const updated = [lo, hi];
    if (rangeValue === undefined) setInternalRange(updated);
    onRangeChange && onRangeChange(updated);
  };
  const onThumbDown = (e, thumb) => {
    if (disabled) return;
    e.stopPropagation();
    const move = ev => setRangeFromClientX(ev.clientX, thumb);
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };
  if (range) {
    const [lo, hi] = rangeVal;
    const loP = pctOf(lo);
    const hiP = pctOf(hi);
    return /*#__PURE__*/React.createElement("div", _extends({
      ref: trackRef,
      style: {
        position: "relative",
        height: 24,
        display: "flex",
        alignItems: "center",
        cursor: disabled ? "not-allowed" : "default",
        opacity: disabled ? 0.5 : 1,
        touchAction: "none",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        height: 6,
        borderRadius: "var(--radius-full)",
        background: "var(--neutral-100)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: `${loP}%`,
        width: `${hiP - loP}%`,
        height: 6,
        background: "var(--brand-primary)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      onPointerDown: e => onThumbDown(e, 0),
      style: {
        ...THUMB,
        left: `calc(${loP}% - 12px)`,
        cursor: "grab"
      }
    }), /*#__PURE__*/React.createElement("div", {
      onPointerDown: e => onThumbDown(e, 1),
      style: {
        ...THUMB,
        left: `calc(${hiP}% - 12px)`,
        cursor: "grab"
      }
    }));
  }
  const pct = pctOf(val);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: trackRef,
    onPointerDown: onDown,
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      alignItems: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      touchAction: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      height: 6,
      borderRadius: "var(--radius-full)",
      background: "var(--neutral-100)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      width: `${pct}%`,
      height: 6,
      borderRadius: "var(--radius-full)",
      background: "var(--brand-primary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...THUMB,
      left: `calc(${pct}% - 12px)`
    }
  }));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Slider/Slider.jsx", error: String((e && e.message) || e) }); }

// components/Snackbar/Snackbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Snackbar — transient message. color: dark | primary. type: box | full.
 * Optional leading icon, caption line, and a text/icon action.
 */
function Snackbar({
  title = "Saved to favourites",
  caption,
  color = "dark",
  type = "box",
  icon,
  action,
  onAction,
  actionIcon,
  style,
  ...rest
}) {
  const bg = color === "primary" ? "var(--brand-primary)" : "var(--neutral-900)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: caption ? "flex-start" : "center",
      gap: 12,
      width: type === "full" ? "100%" : "auto",
      maxWidth: type === "full" ? "none" : 360,
      padding: "12px 16px",
      background: bg,
      color: "var(--sky-white)",
      borderRadius: type === "full" ? "var(--radius-none)" : "var(--radius-l)",
      boxShadow: type === "box" ? "var(--shadow-lg)" : "none",
      boxSizing: "border-box",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      marginTop: caption ? 1 : 0
    }
  }, typeof icon === "string" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  }) : icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--text-body-sm)",
      lineHeight: 1.3
    }
  }, title), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-regular)",
      fontSize: "var(--text-caption)",
      opacity: 0.75,
      marginTop: 2
    }
  }, caption)), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      flexShrink: 0,
      border: "none",
      background: "transparent",
      color: color === "primary" ? "var(--sky-white)" : "var(--brand-light)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-body-sm)",
      cursor: "pointer"
    }
  }, action), actionIcon && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      flexShrink: 0,
      border: "none",
      background: "transparent",
      color: "var(--sky-white)",
      cursor: "pointer",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: actionIcon,
    size: 20
  })));
}
Object.assign(__ds_scope, { Snackbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Snackbar/Snackbar.jsx", error: String((e && e.message) || e) }); }

// components/Stepper/Stepper.jsx
try { (() => {
/** Stepper — minus / value / plus. size: lg (44) | sm (32). */
function Stepper({
  value,
  defaultValue = 1,
  min = 0,
  max = 99,
  step = 1,
  size = "lg",
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const val = value !== undefined ? value : internal;
  const set = n => {
    const next = Math.max(min, Math.min(max, n));
    if (value === undefined) setInternal(next);
    onChange && onChange(next);
  };
  const dim = size === "sm" ? 32 : 44;
  const iconSize = size === "sm" ? 14 : 18;
  const btn = isDisabled => ({
    width: dim,
    height: dim,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid var(--border-default)",
    borderRadius: "var(--radius-m)",
    background: "var(--surface-page)",
    color: isDisabled ? "var(--content-disabled)" : "var(--content-primary)",
    cursor: isDisabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    flexShrink: 0
  });
  const MinusIcon = () => React.createElement("svg", {
    width: iconSize,
    height: iconSize,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round"
  }, React.createElement("line", {
    x1: 5,
    y1: 12,
    x2: 19,
    y2: 12
  }));
  const PlusIcon = () => React.createElement("svg", {
    width: iconSize,
    height: iconSize,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round"
  }, React.createElement("line", {
    x1: 12,
    y1: 5,
    x2: 12,
    y2: 19
  }), React.createElement("line", {
    x1: 5,
    y1: 12,
    x2: 19,
    y2: 12
  }));
  return React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      ...style
    },
    ...rest
  }, React.createElement("button", {
    type: "button",
    onClick: () => set(val - step),
    disabled: disabled || val <= min,
    style: btn(disabled || val <= min)
  }, React.createElement(MinusIcon)), React.createElement("span", {
    style: {
      minWidth: 24,
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-body)",
      color: "var(--content-primary)"
    }
  }, val), React.createElement("button", {
    type: "button",
    onClick: () => set(val + step),
    disabled: disabled || val >= max,
    style: btn(disabled || val >= max)
  }, React.createElement(PlusIcon)));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Stepper/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/Switch/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Switch — track 50x28, thumb 24x24. on = brand fill, off = neutral-200. */
function Switch({
  on = false,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!on),
    style: {
      position: "relative",
      width: 50,
      height: 28,
      flexShrink: 0,
      border: "none",
      borderRadius: "var(--radius-full)",
      background: on ? "var(--brand-primary)" : "var(--neutral-200)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background 160ms ease",
      padding: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: on ? 24 : 2,
      width: 24,
      height: 24,
      borderRadius: "var(--radius-full)",
      background: "var(--sky-white)",
      boxShadow: "var(--shadow-sm)",
      transition: "left 160ms cubic-bezier(0.4,0,0.2,1)"
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Switch/Switch.jsx", error: String((e && e.message) || e) }); }

// components/TabBar/TabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TabBar (Icon & Text) — 83px bottom bar incl. home-indicator space.
 * Active = gold, inactive = neutral-400. Label Nunito Sans Medium 10.
 */
function TabBar({
  tabs,
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const items = tabs || [{
    key: "home",
    icon: "home-2",
    label: "Home"
  }, {
    key: "search",
    icon: "magnifer",
    label: "Explore"
  }, {
    key: "saved",
    icon: "heart",
    label: "Saved"
  }, {
    key: "profile",
    icon: "user",
    label: "Profile"
  }];
  const [internal, setInternal] = React.useState(defaultValue ?? items[0].key);
  const active = value !== undefined ? value : internal;
  const pick = k => {
    if (value === undefined) setInternal(k);
    onChange && onChange(k);
  };
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-around",
      height: 83,
      paddingTop: 10,
      background: "var(--surface-page)",
      borderTop: "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), items.map(t => {
    const on = t.key === active;
    const color = on ? "var(--brand-primary)" : "var(--neutral-400)";
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      type: "button",
      onClick: () => pick(t.key),
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        padding: "4px 12px",
        minWidth: 56
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 24,
      color: color
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: "var(--weight-medium)",
        fontSize: "var(--text-caption-sm)",
        color,
        lineHeight: 1
      }
    }, t.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/TabBar/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/Tabs/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tabs — top text tabs with a gold underline indicator. */
function Tabs({
  tabs = ["Overview", "Details", "Reviews"],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? tabs[0]);
  const active = value !== undefined ? value : internal;
  const pick = t => {
    if (value === undefined) setInternal(t);
    onChange && onChange(t);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      borderBottom: "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), tabs.map(t => {
    const on = t === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      type: "button",
      onClick: () => pick(t),
      style: {
        position: "relative",
        padding: "12px 16px",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontWeight: on ? "var(--weight-bold)" : "var(--weight-medium)",
        fontSize: "var(--text-body-sm)",
        color: on ? "var(--content-primary)" : "var(--content-secondary)",
        whiteSpace: "nowrap"
      }
    }, t, on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 12,
        right: 12,
        bottom: -1,
        height: 2.5,
        borderRadius: "var(--radius-full)",
        background: "var(--brand-primary)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tabs/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/Tooltip/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tooltip — dark surface, white text, radius 4, pad 8. position sets the arrow side. */
function Tooltip({
  children = "Tooltip",
  position = "bottom",
  style,
  ...rest
}) {
  const arrow = {
    position: "absolute",
    width: 8,
    height: 8,
    background: "var(--neutral-900)",
    transform: "rotate(45deg)"
  };
  const arrowPos = {
    top: {
      left: "50%",
      bottom: -4,
      marginLeft: -4
    },
    bottom: {
      left: "50%",
      top: -4,
      marginLeft: -4
    },
    left: {
      top: "50%",
      right: -4,
      marginTop: -4
    },
    right: {
      top: "50%",
      left: -4,
      marginTop: -4
    }
  }[position];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      padding: "8px 10px",
      background: "var(--neutral-900)",
      color: "var(--sky-lightest)",
      borderRadius: "var(--radius-s)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-regular)",
      fontSize: "var(--text-caption)",
      lineHeight: 1.3,
      whiteSpace: "nowrap",
      boxShadow: "var(--shadow-md)"
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      ...arrow,
      ...arrowPos
    }
  })));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tooltip/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zeno-app/App.jsx
try { (() => {
// App — phone frame, tab navigation, filter sheet, booking snackbar
const {
  TabBar,
  BottomSheet,
  ActionSheet,
  Chip,
  Button,
  SegmentedControl,
  Slider,
  Snackbar,
  Avatar,
  Divider,
  NavBar,
  Switch,
  Icon
} = window.ZenoPropertyDesignSystem_e0eecb;
function StatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 14,
      color: "var(--content-primary)"
    }
  }, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 6,
      color: "var(--content-primary)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "signal",
    set: "material-symbols",
    weight: "rounded",
    size: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    set: "material-symbols",
    weight: "rounded",
    size: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery-full-alt",
    set: "material-symbols",
    weight: "rounded",
    size: 16
  })));
}
function FilterSheet({
  open,
  onClose,
  activeFilter,
  setActiveFilter
}) {
  const [seg, setSeg] = React.useState("Buy");
  return /*#__PURE__*/React.createElement(BottomSheet, {
    open: open,
    onClose: onClose,
    title: "Filter homes"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    segments: ["Buy", "Rent", "New"],
    value: seg,
    onChange: setSeg,
    style: {
      width: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 13,
      color: "var(--content-secondary)",
      marginBottom: 8
    }
  }, "Property type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 18
    }
  }, window.ZENO_DATA.filters.map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f,
    selected: f === activeFilter,
    onClick: () => setActiveFilter(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 13,
      color: "var(--content-secondary)",
      marginBottom: 8
    }
  }, "Max price (MMK Lakh)"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Slider, {
    defaultValue: 60
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "outline",
    onClick: () => setActiveFilter("All")
  }, "Reset"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    size: "block",
    onClick: onClose
  }, "Apply filters"))));
}
function App() {
  const [tab, setTab] = React.useState("home");
  const [detail, setDetail] = React.useState(null);
  const [favs, setFavs] = React.useState({
    p1: true
  });
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [activeFilter, setActiveFilter] = React.useState("All");
  const [toast, setToast] = React.useState(false);
  const toggleFav = id => setFavs(f => ({
    ...f,
    [id]: !f[id]
  }));
  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(false), 2600);
    return () => clearTimeout(t);
  }, [toast]);
  let screen;
  if (detail) {
    screen = /*#__PURE__*/React.createElement(window.DetailScreen, {
      property: detail,
      onBack: () => setDetail(null),
      favs: favs,
      toggleFav: toggleFav,
      onContact: () => setToast(true)
    });
  } else if (tab === "home") {
    screen = /*#__PURE__*/React.createElement(window.HomeScreen, {
      onOpenProperty: setDetail,
      onOpenFilter: () => setFilterOpen(true),
      favs: favs,
      toggleFav: toggleFav,
      activeFilter: activeFilter,
      setActiveFilter: setActiveFilter
    });
  } else if (tab === "saved") {
    screen = /*#__PURE__*/React.createElement(window.SavedScreen, {
      favs: favs,
      toggleFav: toggleFav,
      onOpenProperty: setDetail,
      goExplore: () => setTab("home")
    });
  } else if (tab === "profile") {
    screen = /*#__PURE__*/React.createElement(window.ProfileScreen, null);
  } else {
    screen = /*#__PURE__*/React.createElement(window.HomeScreen, {
      onOpenProperty: setDetail,
      onOpenFilter: () => setFilterOpen(true),
      favs: favs,
      toggleFav: toggleFav,
      activeFilter: activeFilter,
      setActiveFilter: setActiveFilter
    });
  }
  const tabs = [{
    key: "home",
    icon: "home-2",
    label: "Home"
  }, {
    key: "explore",
    icon: "magnifer",
    label: "Explore"
  }, {
    key: "saved",
    icon: "heart",
    label: "Saved"
  }, {
    key: "profile",
    icon: "user",
    label: "Profile"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 390,
      height: 844,
      background: "var(--surface-page)",
      borderRadius: 44,
      overflow: "hidden",
      boxShadow: "0 40px 80px rgba(0,0,0,0.28)",
      border: "10px solid #0c0d0e",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }
  }, screen, /*#__PURE__*/React.createElement(FilterSheet, {
    open: filterOpen,
    onClose: () => setFilterOpen(false),
    activeFilter: activeFilter,
    setActiveFilter: setActiveFilter
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      right: 16,
      bottom: 16,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(Snackbar, {
    color: "primary",
    icon: "check-circle",
    title: "Viewing requested",
    caption: "The agent will confirm shortly",
    type: "full",
    style: {
      borderRadius: "var(--radius-l)"
    }
  }))), !detail && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(TabBar, {
    tabs: tabs,
    value: tab === "explore" ? "home" : tab,
    onChange: k => {
      setTab(k);
      setDetail(null);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      padding: "6px 0 8px",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 134,
      height: 5,
      borderRadius: 9999,
      background: "var(--content-primary)"
    }
  }))));
}
window.ZenoApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zeno-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zeno-app/DetailScreen.jsx
try { (() => {
// DetailScreen — full property view with gallery, meta, agent, and CTA
const {
  NavBar,
  Badge,
  Button,
  Tabs,
  Divider,
  Avatar,
  Icon,
  IconButton
} = window.ZenoPropertyDesignSystem_e0eecb;
function DetailScreen({
  property,
  onBack,
  favs,
  toggleFav,
  onContact
}) {
  const p = property;
  const [tab, setTab] = React.useState("Overview");
  const fav = !!favs[p.id];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: 280,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: p.title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 12,
      right: 12,
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      width: 40,
      height: 40,
      borderRadius: 9999,
      border: "none",
      background: "rgba(255,255,255,0.92)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alt-arrow-left",
    size: 22,
    color: "var(--content-primary)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 9999,
      border: "none",
      background: "rgba(255,255,255,0.92)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "share",
    size: 20,
    color: "var(--content-primary)"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => toggleFav(p.id),
    style: {
      width: 40,
      height: 40,
      borderRadius: 9999,
      border: "none",
      background: "rgba(255,255,255,0.92)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 20,
    color: fav ? "var(--red-base)" : "var(--content-primary)"
  })))), p.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: p.badge === "Verified" ? "success" : "info"
  }, p.badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 24,
      color: "var(--content-primary)"
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginTop: 6,
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--content-secondary)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-point",
    size: 16,
    color: "var(--content-disabled)"
  }), p.location)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 20,
      color: "var(--brand-primary)",
      whiteSpace: "nowrap"
    }
  }, p.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      margin: "16px 0"
    }
  }, [["bed", `${p.beds} Beds`], ["bath", `${p.baths} Baths`], ["scaling", p.area]].map(([ic, lb]) => /*#__PURE__*/React.createElement("div", {
    key: lb,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      padding: "12px 4px",
      background: "var(--neutral-25)",
      borderRadius: "var(--radius-m)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    color: "var(--brand-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 12,
      color: "var(--content-primary)"
    }
  }, lb))))), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["Overview", "Amenities", "Location"],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--content-secondary)"
    }
  }, "A bright, newly-built home with an open-plan living area, private garden and covered parking. Walking distance to schools, markets and the downtown business district."), /*#__PURE__*/React.createElement(Divider, {
    padded: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: 48,
    initials: "AK",
    status: "online"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 15,
      color: "var(--content-primary)"
    }
  }, "Aung Ko"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--content-secondary)"
    }
  }, "Zeno verified agent")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "phone",
    type: "secondary"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chat-round",
    type: "secondary"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      padding: 16,
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--surface-page)",
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "outline",
    onClick: () => toggleFav(p.id)
  }, fav ? "Saved" : "Save"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    size: "block",
    onClick: onContact
  }, "Book a viewing"))));
}
window.DetailScreen = DetailScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zeno-app/DetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zeno-app/HomeScreen.jsx
try { (() => {
// HomeScreen — explore feed with search, filter chips, and listings
const {
  NavBar,
  SearchBar,
  Chip,
  PropertyCard,
  Avatar,
  Icon
} = window.ZenoPropertyDesignSystem_e0eecb;
function HomeScreen({
  onOpenProperty,
  onOpenFilter,
  favs,
  toggleFav,
  activeFilter,
  setActiveFilter
}) {
  const data = window.ZENO_DATA;
  const list = activeFilter === "All" ? data.properties : data.properties.filter(p => p.type === activeFilter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px 12px",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: 40,
    initials: "MY",
    status: "online"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--content-secondary)"
    }
  }, "Good morning"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--content-primary)"
    }
  }, "Mingalar \uD83D\uDC4B"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 44,
      height: 44,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-m)",
      background: "var(--neutral-25)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 22,
    color: "var(--content-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 8,
      right: 9,
      width: 8,
      height: 8,
      borderRadius: 9999,
      background: "var(--brand-primary)",
      border: "2px solid var(--surface-page)"
    }
  }))), /*#__PURE__*/React.createElement(SearchBar, {
    showFilter: true,
    onFilter: onOpenFilter,
    placeholder: "Search homes, areas\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: "4px 16px 12px",
      overflowX: "auto",
      background: "var(--surface-page)"
    }
  }, data.filters.map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f,
    selected: f === activeFilter,
    onClick: () => setActiveFilter(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "8px 16px 20px",
      background: "var(--neutral-25)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "6px 2px 12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--content-primary)"
    }
  }, "Featured homes"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 13,
      color: "var(--brand-primary)"
    }
  }, "See all")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, list.map(p => /*#__PURE__*/React.createElement(PropertyCard, {
    key: p.id,
    image: p.image,
    price: p.price,
    location: p.location,
    beds: p.beds,
    baths: p.baths,
    area: p.area,
    badge: p.badge,
    favourite: !!favs[p.id],
    onFavourite: () => toggleFav(p.id),
    onClick: () => onOpenProperty(p)
  })))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zeno-app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zeno-app/ProfileScreen.jsx
try { (() => {
// ProfileScreen — account header, settings list, dark-mode toggle
const {
  Avatar,
  Icon,
  NavBar,
  Switch
} = window.ZenoPropertyDesignSystem_e0eecb;
function ProfileScreen() {
  const rows = [{
    icon: "user",
    label: "Personal details"
  }, {
    icon: "document-text",
    label: "My listings"
  }, {
    icon: "wallet",
    label: "Payments"
  }, {
    icon: "bell",
    label: "Notifications"
  }, {
    icon: "shield-check",
    label: "Privacy & security"
  }];
  const [dark, setDark] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: "var(--neutral-25)"
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    large: true,
    title: "Profile"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: 16,
      background: "var(--surface-page)",
      borderRadius: "var(--radius-l)",
      border: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: 56,
    initials: "MY",
    status: "online"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--content-primary)"
    }
  }, "Mingalar Yu"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--content-secondary)"
    }
  }, "mingalar@zeno.app")), /*#__PURE__*/React.createElement(Icon, {
    name: "alt-arrow-right",
    size: 20,
    color: "var(--content-disabled)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      background: "var(--surface-page)",
      borderRadius: "var(--radius-l)",
      border: "1px solid var(--border-subtle)",
      overflow: "hidden"
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    className: "zeno-pressable",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 16px",
      borderTop: i ? "1px solid var(--border-subtle)" : "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 22,
    color: "var(--brand-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--content-primary)"
    }
  }, r.label), /*#__PURE__*/React.createElement(Icon, {
    name: "alt-arrow-right",
    size: 18,
    color: "var(--content-disabled)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 16px",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "moon",
    size: 22,
    color: "var(--brand-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--content-primary)"
    }
  }, "Dark mode"), /*#__PURE__*/React.createElement(Switch, {
    on: dark,
    onChange: setDark
  })))));
}
window.ProfileScreen = ProfileScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zeno-app/ProfileScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zeno-app/SavedScreen.jsx
try { (() => {
// SavedScreen — favourites list + empty state
const {
  NavBar,
  PropertyCard,
  Button,
  Icon
} = window.ZenoPropertyDesignSystem_e0eecb;
function SavedScreen({
  favs,
  toggleFav,
  onOpenProperty,
  goExplore
}) {
  const data = window.ZENO_DATA;
  const saved = data.properties.filter(p => favs[p.id]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    large: true,
    title: "Saved homes",
    caption: `${saved.length} ${saved.length === 1 ? "home" : "homes"} saved`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "8px 16px 20px",
      background: "var(--neutral-25)"
    }
  }, saved.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      textAlign: "center",
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 72,
      height: 72,
      borderRadius: 9999,
      background: "var(--brand-lightest)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 34,
    color: "var(--brand-primary)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 6px",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      color: "var(--content-primary)"
    }
  }, "No saved homes yet"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 20px",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--content-secondary)"
    }
  }, "Tap the heart on any listing to keep it here."), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    icon: "magnifer",
    onClick: goExplore
  }, "Explore homes")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      paddingTop: 8
    }
  }, saved.map(p => /*#__PURE__*/React.createElement(PropertyCard, {
    key: p.id,
    image: p.image,
    price: p.price,
    location: p.location,
    beds: p.beds,
    baths: p.baths,
    area: p.area,
    badge: p.badge,
    favourite: true,
    onFavourite: () => toggleFav(p.id),
    onClick: () => onOpenProperty(p)
  })))));
}
window.SavedScreen = SavedScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zeno-app/SavedScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zeno-app/data.js
try { (() => {
// Shared property data for the Zeno app UI kit
window.ZENO_DATA = {
  properties: [{
    id: "p1",
    image: "../../assets/img/property-1.jpg",
    price: "MMK 4,000L",
    title: "Modern Family House",
    location: "Mingalar Taung Nyunt, Yangon",
    beds: 4,
    baths: 3,
    area: "2,700 sq ft",
    badge: "Verified",
    type: "House"
  }, {
    id: "p2",
    image: "../../assets/img/property-2.jpg",
    price: "MMK 3,500L",
    title: "Garden Townhouse",
    location: "Bahan Township, Yangon",
    beds: 3,
    baths: 2,
    area: "1,900 sq ft",
    badge: "New",
    type: "House"
  }, {
    id: "p3",
    image: "../../assets/img/property-1.jpg",
    price: "MMK 2,200L",
    title: "City Condo",
    location: "Sanchaung, Yangon",
    beds: 2,
    baths: 2,
    area: "1,100 sq ft",
    type: "Condo"
  }, {
    id: "p4",
    image: "../../assets/img/property-2.jpg",
    price: "MMK 6,800L",
    title: "Lakeview Villa",
    location: "Inya Lake, Yangon",
    beds: 5,
    baths: 4,
    area: "4,200 sq ft",
    badge: "Verified",
    type: "House"
  }],
  filters: ["All", "House", "Condo", "Apartment", "Land"]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zeno-app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/zeno-app/phone-frame.jsx
try { (() => {
// Shared phone shell for the per-screen Page cards
const {
  Icon: ZenoFrameIcon
} = window.ZenoPropertyDesignSystem_e0eecb;
function ZenoStatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 14,
      color: "var(--content-primary)"
    }
  }, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 6,
      color: "var(--content-primary)"
    }
  }, /*#__PURE__*/React.createElement(ZenoFrameIcon, {
    name: "signal",
    set: "material-symbols",
    weight: "rounded",
    size: 16
  }), /*#__PURE__*/React.createElement(ZenoFrameIcon, {
    name: "wifi",
    set: "material-symbols",
    weight: "rounded",
    size: 16
  }), /*#__PURE__*/React.createElement(ZenoFrameIcon, {
    name: "battery-full-alt",
    set: "material-symbols",
    weight: "rounded",
    size: 16
  })));
}
function ZenoHomeIndicator() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      padding: "6px 0 8px",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 134,
      height: 5,
      borderRadius: 9999,
      background: "var(--content-primary)"
    }
  }));
}
function ZenoPhone({
  children,
  footer
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 390,
      height: 844,
      background: "var(--surface-page)",
      borderRadius: 44,
      overflow: "hidden",
      boxShadow: "0 40px 80px rgba(0,0,0,0.28)",
      border: "10px solid #0c0d0e",
      display: "flex",
      flexDirection: "column",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(ZenoStatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }
  }, children), footer);
}
window.ZenoStatusBar = ZenoStatusBar;
window.ZenoHomeIndicator = ZenoHomeIndicator;
window.ZenoPhone = ZenoPhone;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zeno-app/phone-frame.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ActionSheet = __ds_scope.ActionSheet;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.NotificationCard = __ds_scope.NotificationCard;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.PropertyCard = __ds_scope.PropertyCard;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Snackbar = __ds_scope.Snackbar;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();

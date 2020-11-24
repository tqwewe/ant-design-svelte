/* src/components/Menu/Menu.svelte generated by Svelte v3.29.7 */
import {
	SvelteComponent,
	attr,
	binding_callbacks,
	create_slot,
	detach,
	element,
	init,
	insert,
	safe_not_equal,
	toggle_class,
	transition_in,
	transition_out,
	update_slot
} from "../../../web_modules/svelte/internal.js";

import { setContext } from "../../../web_modules/svelte.js";
import { writable } from "../../../web_modules/svelte/store.js";
import { context } from "./context.js";

function create_fragment(ctx) {
	let ul;
	let ul_class_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[10].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[9], null);

	return {
		c() {
			ul = element("ul");
			if (default_slot) default_slot.c();
			attr(ul, "class", ul_class_value = `ant-menu ant-menu-root ${/*className*/ ctx[0]}`);
			attr(ul, "role", "menu");
			attr(ul, "style", /*style*/ ctx[1]);
			toggle_class(ul, "ant-menu-light", /*theme*/ ctx[2] === "light");
			toggle_class(ul, "ant-menu-dark", /*theme*/ ctx[2] === "dark");
			toggle_class(ul, "ant-menu-inline", /*mode*/ ctx[3] === "inline");
			toggle_class(ul, "ant-menu-horizontal", /*mode*/ ctx[3] === "horizontal");
			toggle_class(ul, "ant-menu-vertical", /*mode*/ ctx[3] === "vertical");
			toggle_class(ul, "ant-menu-vertical-right", /*mode*/ ctx[3] === "vertical-right");
			toggle_class(ul, "ant-menu-vertical-left", /*mode*/ ctx[3] === "vertical-left");
			toggle_class(ul, "iant-menu-nline-collapsed", /*collapsed*/ ctx[4]);
		},
		m(target, anchor) {
			insert(target, ul, anchor);

			if (default_slot) {
				default_slot.m(ul, null);
			}

			/*ul_binding*/ ctx[11](ul);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 512) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[9], dirty, null, null);
				}
			}

			if (!current || dirty & /*className*/ 1 && ul_class_value !== (ul_class_value = `ant-menu ant-menu-root ${/*className*/ ctx[0]}`)) {
				attr(ul, "class", ul_class_value);
			}

			if (!current || dirty & /*style*/ 2) {
				attr(ul, "style", /*style*/ ctx[1]);
			}

			if (dirty & /*className, theme*/ 5) {
				toggle_class(ul, "ant-menu-light", /*theme*/ ctx[2] === "light");
			}

			if (dirty & /*className, theme*/ 5) {
				toggle_class(ul, "ant-menu-dark", /*theme*/ ctx[2] === "dark");
			}

			if (dirty & /*className, mode*/ 9) {
				toggle_class(ul, "ant-menu-inline", /*mode*/ ctx[3] === "inline");
			}

			if (dirty & /*className, mode*/ 9) {
				toggle_class(ul, "ant-menu-horizontal", /*mode*/ ctx[3] === "horizontal");
			}

			if (dirty & /*className, mode*/ 9) {
				toggle_class(ul, "ant-menu-vertical", /*mode*/ ctx[3] === "vertical");
			}

			if (dirty & /*className, mode*/ 9) {
				toggle_class(ul, "ant-menu-vertical-right", /*mode*/ ctx[3] === "vertical-right");
			}

			if (dirty & /*className, mode*/ 9) {
				toggle_class(ul, "ant-menu-vertical-left", /*mode*/ ctx[3] === "vertical-left");
			}

			if (dirty & /*className, collapsed*/ 17) {
				toggle_class(ul, "iant-menu-nline-collapsed", /*collapsed*/ ctx[4]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(ul);
			if (default_slot) default_slot.d(detaching);
			/*ul_binding*/ ctx[11](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { className = undefined } = $$props;
	let { style = undefined } = $$props;
	let { theme = "light" } = $$props;
	let { mode = "vertical" } = $$props;
	let { divider = false } = $$props;
	let { collapsed = false } = $$props;
	let { defaultSelectedKey = undefined } = $$props;
	let { defaultOpenKey = undefined } = $$props;
	let selectedKey = writable(defaultSelectedKey);
	let openKey = writable(defaultOpenKey);
	let inlineCollapsed = writable(collapsed);
	let subSelected = writable(defaultOpenKey);
	let menu;

	setContext(context, {
		mode,
		divider,
		menu,
		selectedKey,
		openKey,
		subSelected,
		collapsed: inlineCollapsed
	});

	function ul_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			menu = $$value;
			$$invalidate(5, menu);
		});
	}

	$$self.$$set = $$props => {
		if ("className" in $$props) $$invalidate(0, className = $$props.className);
		if ("style" in $$props) $$invalidate(1, style = $$props.style);
		if ("theme" in $$props) $$invalidate(2, theme = $$props.theme);
		if ("mode" in $$props) $$invalidate(3, mode = $$props.mode);
		if ("divider" in $$props) $$invalidate(6, divider = $$props.divider);
		if ("collapsed" in $$props) $$invalidate(4, collapsed = $$props.collapsed);
		if ("defaultSelectedKey" in $$props) $$invalidate(7, defaultSelectedKey = $$props.defaultSelectedKey);
		if ("defaultOpenKey" in $$props) $$invalidate(8, defaultOpenKey = $$props.defaultOpenKey);
		if ("$$scope" in $$props) $$invalidate(9, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*collapsed*/ 16) {
			$: {
				inlineCollapsed.set(collapsed);
			}
		}
	};

	return [
		className,
		style,
		theme,
		mode,
		collapsed,
		menu,
		divider,
		defaultSelectedKey,
		defaultOpenKey,
		$$scope,
		slots,
		ul_binding
	];
}

class Menu extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			className: 0,
			style: 1,
			theme: 2,
			mode: 3,
			divider: 6,
			collapsed: 4,
			defaultSelectedKey: 7,
			defaultOpenKey: 8
		});
	}
}

export default Menu;
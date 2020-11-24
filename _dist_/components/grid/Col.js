import './Col.css.proxy.js';
/* src/components/grid/Col.svelte generated by Svelte v3.29.7 */
import {
	SvelteComponent,
	attr,
	create_slot,
	detach,
	element,
	init,
	insert,
	null_to_empty,
	safe_not_equal,
	transition_in,
	transition_out,
	update_slot
} from "../../../web_modules/svelte/internal.js";

import { getContext } from "../../../web_modules/svelte.js";

function create_fragment(ctx) {
	let div;
	let div_class_value;
	let div_style_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[10].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[9], null);

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
			attr(div, "class", div_class_value = "" + (null_to_empty(/*classes*/ ctx[0]) + " svelte-x2c1kt"));
			attr(div, "style", div_style_value = [/*gutterProp*/ ctx[1]].filter(func).join(" "));
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 512) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[9], dirty, null, null);
				}
			}

			if (!current || dirty & /*classes*/ 1 && div_class_value !== (div_class_value = "" + (null_to_empty(/*classes*/ ctx[0]) + " svelte-x2c1kt"))) {
				attr(div, "class", div_class_value);
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
			if (detaching) detach(div);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

const func = item => item;

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { xs = undefined } = $$props;
	let { sm = undefined } = $$props;
	let { md = undefined } = $$props;
	let { lg = undefined } = $$props;
	let { xl = undefined } = $$props;
	let { xxl = undefined } = $$props;
	let { span = undefined } = $$props;
	let gutter = getContext("gutter");

	let gutterProp = gutter
	? `padding-left: ${gutter / 2}px; padding-right: ${gutter / 2}px;`
	: false;

	$$self.$$set = $$props => {
		if ("xs" in $$props) $$invalidate(2, xs = $$props.xs);
		if ("sm" in $$props) $$invalidate(3, sm = $$props.sm);
		if ("md" in $$props) $$invalidate(4, md = $$props.md);
		if ("lg" in $$props) $$invalidate(5, lg = $$props.lg);
		if ("xl" in $$props) $$invalidate(6, xl = $$props.xl);
		if ("xxl" in $$props) $$invalidate(7, xxl = $$props.xxl);
		if ("span" in $$props) $$invalidate(8, span = $$props.span);
		if ("$$scope" in $$props) $$invalidate(9, $$scope = $$props.$$scope);
	};

	let classes;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*span, xs, sm, md, lg, xl, xxl*/ 508) {
			$: $$invalidate(0, classes = [
				"ant-col",
				span ? `ant-col-${span}` : false,
				String(xs) ? `ant-col-xs-${xs}` : false,
				String(sm) ? `ant-col-sm-${sm}` : false,
				String(md) ? `ant-col-md-${md}` : false,
				String(lg) ? `ant-col-lg-${lg}` : false,
				String(xl) ? `ant-col-xl-${xl}` : false,
				String(xxl) ? `ant-col-xxl-${xxl}` : false
			].filter(item => item).join(" "));
		}
	};

	return [classes, gutterProp, xs, sm, md, lg, xl, xxl, span, $$scope, slots];
}

class Col extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			xs: 2,
			sm: 3,
			md: 4,
			lg: 5,
			xl: 6,
			xxl: 7,
			span: 8
		});
	}
}

export default Col;
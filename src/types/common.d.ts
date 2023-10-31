export type SvgProps = {
  className: string;
};
declare function loadableFunc<Props>(
  loadFn: (props: Props) => Promise<DefaultComponent<Props>>,
  options?: OptionsWithoutResolver<Props>
): LoadableComponent<Props>;

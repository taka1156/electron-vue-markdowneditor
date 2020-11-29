const slide = md => {
  if (md === '') return null;
  return md.split(/^---|\*\*\*$/gm);
};

export { slide };

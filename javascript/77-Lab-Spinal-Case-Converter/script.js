function spinalCase(str) {
  return str
    .split(/(?=[A-Z])|[\s_]+/)
    .join('-')
    .toLowerCase();
}

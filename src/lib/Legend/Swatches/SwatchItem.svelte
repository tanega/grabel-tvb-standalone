<script lang="ts">
  export let color: (c: string) => string
  export let domain: any[string]
  export let format: (x: string) => string
  $: cssVariables = Object.entries($$props)
    .filter(([key]) => key.startsWith('--'))
    .reduce((css, [key, value]) => `${css}${key}: ${value};`, '')
</script>

<div style={`${cssVariables}`}>
  <div style="width: '100%'">
    {#each domain as value}
      <div class="item">
        <div class="swatch" style={`background: ${color(value)}`} />
        <div class="label" title={format(value)}>{format(value)}</div>
      </div>
    {/each}
  </div>
</div>

<style>
  .item {
    break-inside: avoid;
    display: flex;
    align-items: center;
    padding-bottom: 1px;
  }

  .label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - calc(var(--swatch-size) * 1px) - 0.5em);
  }

  .swatch {
    width: calc(var(--swatch-size) * 1px);
    height: calc(var(--swatch-size) * 1px);
    margin: 0 0.5em 0 0;
  }
</style>

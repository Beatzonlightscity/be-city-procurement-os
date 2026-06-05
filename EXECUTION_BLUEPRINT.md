cd be-city-procurement-os

# Create first file
echo "[paste EXECUTION_BLUEPRINT.md content]" > EXECUTION_BLUEPRINT.md

# Create second file
echo "[paste GITHUB_PORTFOLIO_CONSOLIDATION.md content]" > GITHUB_PORTFOLIO_CONSOLIDATION.md

# Commit
git add EXECUTION_BLUEPRINT.md GITHUB_PORTFOLIO_CONSOLIDATION.md
git commit -m "Add: Final execution blueprint and GitHub portfolio consolidation"
git push origin main

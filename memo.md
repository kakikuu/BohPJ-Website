# メモ
## responseのjsonファイルから必要データを取り出す
### Work
```json
"fields": {
                "workstitle": "テスト第二弾",
                "workoverview": "スライドデータ取得テストですねこれは。",
                "slidedata": [
                    {
                        "sys": {
                            "type": "Link",
                            "linkType": "Asset",
                            "id": "4WXfWthA27qtj3dWKyCwDz"
                        }
                    }
                ]
            }
```

- fieldsから`"workstitle"`,`"workoverview"`を直接取得することが可能
- スライドデータだけは、Itemとは別に、includesの中のAssetの中に格納されている。
- とりあえず後回し
    - 順番がめんどくさい。worktitleとworkoverviewは最新のものが上に追加されていくが、スライドのデータは、下に追加されていく。
    - 順番のズレが心配。
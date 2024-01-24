WITH PLUTO AS (
    SELECT 
        (COALESCE(UNITSRES, 0) < 11) AS CANT_REPORT
    FROM PLUTO_LATEST
    WHERE BBL = %(bbl)s
)
SELECT
    CASE WHEN 
        (SELECT CANT_REPORT FROM PLUTO) THEN NULL
        ELSE COALESCE(COUNT(DISTINCT INDEXNUMBERID), 0)::NUMERIC 
    END AS EVICTION_FILINGS
FROM OCA_INDEX AS I
INNER JOIN OCA_ADDRESSES_WITH_BBL AS A USING(INDEXNUMBERID)
WHERE A.BBL = %(bbl)s
  AND I.FILEDDATE BETWEEN %(start_date)s AND %(end_date)s
  AND I.CLASSIFICATION = any('{Holdover,Non-Payment}')
  AND I.PROPERTYTYPE = 'Residential'

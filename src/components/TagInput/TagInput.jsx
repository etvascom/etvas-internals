import { forwardRef, useCallback, useMemo, useState } from 'react'

import css from '@styled-system/css'
import propTypes from '@styled-system/prop-types'
import { themeGet } from '@styled-system/theme-get'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { variant } from 'styled-system'

import { Flex, Icon, Typography } from '@etvas/etvaskit'

import { SubLabel } from './SubLabel'
import { Tag } from './Tag'
import { tagShape } from './shape'
import { default as containerVariants } from './variants.container'
import { default as inputVariants } from './variants.input'

export const TagInput = forwardRef(
  (
    {
      label,
      placeholder,
      loading,
      required,
      disabled,
      readOnly,
      error,
      warning,
      valid,
      variant,
      id,
      name,
      value,
      onChange,
      onBlur,
      autoComplete,
      autoFocus,
      onInputClick,
      importHandler,
      exportHandler,
      noPreserveSpace,
      forceAddTagKeys,
      maxTags,
      showTooltip,
      ...rest
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState('')

    const tags = useMemo(() => importHandler(value), [value, importHandler])

    const currentVariant = useMemo(() => {
      if (disabled || loading) return 'disabled'
      else if (error) return 'error'
      else if (warning) return 'warning'
      else if (valid) return 'valid'
      return variant
    }, [loading, disabled, error, warning, valid, variant])

    const handleTagRemove = index => () => {
      const newTags = [...tags]
      newTags.splice(index, 1)

      onChange(exportHandler(newTags))
    }

    const handleTagAdd = () => {
      onChange(exportHandler([...tags, inputValue.trim()]))
    }

    const handleInputChange = useCallback(
      event => setInputValue(event.target.value),
      []
    )

    const handleInputKeyPress = event => {
      if ([...forceAddTagKeys, 'Enter'].includes(event.key)) {
        event.preventDefault()

        if (inputValue.trim()) {
          handleTagAdd()
          setInputValue('')
        }
      }
    }

    const handleInputKeyDown = event => {
      if (event.key === 'Backspace' && !inputValue) {
        handleTagRemove(-1)()
      }
    }

    const handleInputBlur = event => {
      onBlur(event)

      if (inputValue.trim()) {
        handleTagAdd()
      }

      setInputValue('')
    }

    return (
      <Container flexDirection='column' width={1} {...rest}>
        {!!label && (
          <Flex mb={1} alignItems='center'>
            <Typography
              as='label'
              htmlFor={id}
              variant='base12Bold'
              color='baseMetal'
              width='fit-content'
            >
              {label}
            </Typography>
            {id && showTooltip && (
              <Flex ml={1} alignItems='center' id={`${id}-icon`}>
                <Icon
                  name='information'
                  color='baseMetal'
                  size='small'
                  opacity='.5'
                  cursor='pointer'
                />
              </Flex>
            )}
          </Flex>
        )}

        <Flex alignItems='center' position='relative' width={1}>
          <StyledInputContainer variant={currentVariant}>
            {tags.map((tag, index) => (
              <Tag
                value={tag}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                disabled={disabled}
                onRemove={handleTagRemove(index)}
                my={1}
              />
            ))}
            {maxTags >= tags.length && (
              <StyledInput
                variant={currentVariant}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                ariaDisabled={readOnly || disabled}
                disabled={disabled}
                error={error}
                hasLabel={label}
                id={id}
                name={name}
                onChange={handleInputChange}
                placeholder={readOnly ? '' : placeholder}
                readOnly={readOnly}
                ref={ref}
                required={required}
                type='text'
                value={inputValue}
                onClick={onInputClick}
                onKeyPress={handleInputKeyPress}
                onKeyDown={handleInputKeyDown}
                onBlur={handleInputBlur}
              />
            )}
          </StyledInputContainer>
        </Flex>

        <SubLabel
          noPreserveSpace={noPreserveSpace}
          variant={currentVariant}
          mt={1}
        >
          {error}
        </SubLabel>
      </Container>
    )
  }
)

const Container = styled(Flex)`
  user-select: none;
  overflow: hidden;
  &:focus-within {
    label {
      color: ${themeGet('colors.textInputFocused')};
    }
  }
`

const StyledInputContainer = styled.div(
  variant({ variants: containerVariants }),
  css({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    py: '3px'
  })
)

const StyledInput = styled.input(variant({ variants: inputVariants }))

const defaultImportHandler = value => value
const defaultExportHandler = value => value

TagInput.propTypes = {
  ...propTypes.input,
  ...tagShape,
  loading: PropTypes.bool,
  readOnly: PropTypes.bool,
  error: PropTypes.node,
  warning: PropTypes.bool,
  valid: PropTypes.bool,
  variant: PropTypes.string,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  onInputClick: PropTypes.func,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  importHandler: PropTypes.func,
  exportHandler: PropTypes.func,
  noPreserveSpace: PropTypes.bool,
  maxTags: PropTypes.number,
  forceAddTagKeys: PropTypes.arrayOf(PropTypes.string),
  showTooltip: PropTypes.bool
}

TagInput.defaultProps = {
  autoFocus: false,
  minHeight: 40,
  noBottomSpace: false,
  readOnly: false,
  value: '',
  variant: 'default',
  importHandler: defaultImportHandler,
  exportHandler: defaultExportHandler,
  forceAddTagKeys: [],
  maxTags: 20
}
